import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, orderBy, doc, getDoc, updateDoc, Timestamp, limit, startAfter, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../firebaseDb';
import { Round, Community } from '../types';
import ResultsNotification from './ResultsNotification';
import CustomAlert from './CustomAlert';

type RankingRow = {
  nick: string;
  calculatedWins: number;
  adjustment: number;
  totalWins: number;
};

// Función para formatear el tiempo restante hasta el deadline
const formatTimeRemaining = (deadline: Timestamp): { text: string; color: string; icon: string } => {
  const now = new Date();
  const deadlineDate = deadline.toDate();
  const diffMs = deadlineDate.getTime() - now.getTime();

  // Ya cerrada
  if (diffMs <= 0) {
    return { text: 'Cerrada', color: '#999', icon: '🔒' };
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Menos de 1 hora
  if (diffMinutes < 60) {
    return { text: `¡Última hora! (${diffMinutes} min)`, color: '#d32f2f', icon: '⚠️' };
  }

  // Menos de 24 horas
  if (diffHours < 24) {
    return { text: `Quedan ${diffHours} horas`, color: '#f57c00', icon: '⏰' };
  }

  // Más de 1 día
  const remainingHours = diffHours % 24;
  if (diffDays === 1) {
    return { text: `Queda 1 día ${remainingHours}h`, color: '#388e3c', icon: '⏰' };
  }
  
  return { text: `Quedan ${diffDays} días ${remainingHours}h`, color: '#388e3c', icon: '⏰' };
};

const CommunityDashboard: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { userData, isSuperAdmin } = useAuth();
  const navigate = useNavigate();
  const [community, setCommunity] = useState<Community | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [betsCount, setBetsCount] = useState<{ [roundId: string]: number }>({});
  const [userBets, setUserBets] = useState<{ [roundId: string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [editingDescription, setEditingDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [savingDescription, setSavingDescription] = useState(false);
  const [editingBote, setEditingBote] = useState(false);
  const [boteAmount, setBoteAmount] = useState('0');
  const [botePerRound, setBotePerRound] = useState('0');
  const [savingBote, setSavingBote] = useState(false);
  const [rankingRows, setRankingRows] = useState<RankingRow[]>([]);
  const [rankingAdjustmentDrafts, setRankingAdjustmentDrafts] = useState<Record<string, string>>({});
  const [newRankingNick, setNewRankingNick] = useState('');
  const [newRankingWins, setNewRankingWins] = useState('0');
  const [savingRanking, setSavingRanking] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [activeTab, setActiveTab] = useState<'active' | 'finished'>('active');
  const [alertMessage, setAlertMessage] = useState<{ message: string; type: 'info' | 'warning' | 'error' | 'success' } | null>(null);
  
  // Estados para lazy loading de rondas finalizadas
  const [finishedRounds, setFinishedRounds] = useState<Round[]>([]);
  const [lastFinishedDoc, setLastFinishedDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMoreFinished, setHasMoreFinished] = useState(true);
  const [loadingMoreFinished, setLoadingMoreFinished] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  
  const isAdmin = userData?.communities[communityId || ''] === 'admin';
  const RECENT_CLOSED_DAYS = 4;
  const FINISHED_PAGE_SIZE = 10;

  useEffect(() => {
    loadData();
  }, [communityId]);

  // Recargar datos cuando la ventana recibe foco (al volver de crear ronda)
  useEffect(() => {
    const handleFocus = () => {
      loadData();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [communityId]);

  const loadData = async () => {
    if (!communityId) return;

    try {
      // Cargar comunidad
      const communityDoc = await getDoc(doc(db, 'communities', communityId));
      if (communityDoc.exists()) {
        const communityData = { id: communityDoc.id, ...communityDoc.data() } as Community;
        if (communityData.isActive === false && !isSuperAdmin) {
          setAlertMessage({ message: 'Esta comunidad está desactivada temporalmente', type: 'warning' });
          navigate('/communities', { replace: true });
          return;
        }
        setCommunity(communityData);
        setDescription(communityData.description || '');
        setBoteAmount(String(communityData.boteAmount || 0));
        setBotePerRound(String(communityData.botePerRound || 0));
        await loadRanking(communityData.rankingAdjustments || {});
      }

      const recentClosedCutoff = Timestamp.fromMillis(Date.now() - RECENT_CLOSED_DAYS * 24 * 60 * 60 * 1000);

      // Cargar solo rondas visibles en la pestaña Activas: futuras o cerradas recientemente.
      const q = query(
        collection(db, 'rounds'),
        where('communityId', '==', communityId),
        where('deadline', '>=', recentClosedCutoff),
        orderBy('deadline', 'asc')
      );
      const querySnapshot = await getDocs(q);
      
      let roundsData: Round[] = [];
      querySnapshot.forEach((doc) => {
        roundsData.push({ id: doc.id, ...doc.data() } as Round);
      });

      // Filtrar rondas ocultas si el usuario NO es admin
      if (!isAdmin) {
        roundsData = roundsData.filter(round => round.isVisible !== false);
      }

      setRounds(roundsData);
      await loadBetSummaries(roundsData, {}, {});
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadRanking = async (adjustments: Record<string, number> = community?.rankingAdjustments || {}) => {
    if (!communityId) return;

    const winsByNick: Record<string, number> = {};
    const roundsQuery = query(
      collection(db, 'rounds'),
      where('communityId', '==', communityId),
      where('status', '==', 'results_posted')
    );
    const roundsSnapshot = await getDocs(roundsQuery);

    roundsSnapshot.forEach((roundDoc) => {
      const round = roundDoc.data() as Round;
      if (!round.winnerNick || round.winnerNick === 'BOTE') return;

      const winnerNicks = round.winnerNick
        .split(',')
        .map(nick => nick.trim())
        .filter(Boolean);

      winnerNicks.forEach((nick) => {
        winsByNick[nick] = (winsByNick[nick] || 0) + 1;
      });
    });

    const allNicks = new Set([...Object.keys(winsByNick), ...Object.keys(adjustments)]);
    const rows = Array.from(allNicks)
      .map((nick) => {
        const calculatedWins = winsByNick[nick] || 0;
        const adjustment = adjustments[nick] || 0;
        return {
          nick,
          calculatedWins,
          adjustment,
          totalWins: calculatedWins + adjustment
        };
      })
      .filter(row => row.calculatedWins > 0 || row.adjustment !== 0 || row.totalWins > 0)
      .sort((a, b) => b.totalWins - a.totalWins || a.nick.localeCompare(b.nick));

    setRankingRows(rows);
    setRankingAdjustmentDrafts(Object.fromEntries(rows.map(row => [row.nick, String(row.adjustment)])));
  };

  const handleShareInvitation = async () => {
    if (!community) return;

    const password = (() => {
      try {
        return atob(community.passwordHash);
      } catch {
        return '';
      }
    })();
    const invitation = [
      '🏆 Comunidad nueva creada en Porreta app.',
      '¡¡Únete ahora!!',
      `Nombre: ${community.name}`,
      password ? `Contraseña: ${password}` : null
    ].filter(Boolean).join('\n');

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Únete a ${community.name} en Porreta`,
          text: invitation
        });
        return;
      } catch (error) {
        if ((error as DOMException).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(invitation);
      setAlertMessage({ message: 'No se pudo abrir el menú de compartir. Invitación copiada.', type: 'success' });
    } catch {
      setAlertMessage({ message: invitation, type: 'info' });
    }
  };

  const handleSaveBote = async () => {
    if (!communityId || !community || !isAdmin) return;

    const nextBoteAmount = Number(boteAmount) || 0;
    const nextBotePerRound = Number(botePerRound) || 0;
    setSavingBote(true);

    try {
      await updateDoc(doc(db, 'communities', communityId), {
        boteAmount: nextBoteAmount,
        botePerRound: nextBotePerRound
      });
      setCommunity({ ...community, boteAmount: nextBoteAmount, botePerRound: nextBotePerRound });
      setEditingBote(false);
      setAlertMessage({ message: 'Bote actualizado', type: 'success' });
    } catch (error) {
      console.error('Error guardando bote:', error);
      setAlertMessage({ message: 'Error al guardar el bote', type: 'error' });
    } finally {
      setSavingBote(false);
    }
  };

  const saveRankingAdjustment = async (nick: string, rawValue: string) => {
    if (!communityId || !community || !isSuperAdmin) return;

    const adjustment = Number(rawValue) || 0;
    const nextAdjustments = { ...(community.rankingAdjustments || {}) };
    if (adjustment === 0) {
      delete nextAdjustments[nick];
    } else {
      nextAdjustments[nick] = adjustment;
    }

    setSavingRanking(true);
    try {
      await updateDoc(doc(db, 'communities', communityId), {
        rankingAdjustments: nextAdjustments
      });
      const nextCommunity = { ...community, rankingAdjustments: nextAdjustments };
      setCommunity(nextCommunity);
      await loadRanking(nextAdjustments);
    } catch (error) {
      console.error('Error guardando ranking:', error);
      setAlertMessage({ message: 'Error al guardar el ranking', type: 'error' });
    } finally {
      setSavingRanking(false);
    }
  };

  const addManualRankingEntry = async () => {
    const nick = newRankingNick.trim();
    if (!nick) return;

    setSavingRanking(true);
    try {
      const usersQuery = query(
        collection(db, 'users'),
        where('nick', '==', nick),
        limit(1)
      );
      const usersSnapshot = await getDocs(usersQuery);

      if (usersSnapshot.empty) {
        setAlertMessage({ message: `No existe ningún usuario con el nick "${nick}"`, type: 'warning' });
        return;
      }

      await saveRankingAdjustment(nick, newRankingWins);
      setNewRankingNick('');
      setNewRankingWins('0');
    } catch (error) {
      console.error('Error comprobando usuario del ranking:', error);
      setAlertMessage({ message: 'Error al comprobar el usuario', type: 'error' });
    } finally {
      setSavingRanking(false);
    }
  };

  const loadBetSummaries = async (
    roundsToLoad: Round[],
    baseCounts: { [roundId: string]: number } = betsCount,
    baseUserBets: { [roundId: string]: boolean } = userBets
  ) => {
    if (!communityId || roundsToLoad.length === 0) return;

    const countsMap: { [roundId: string]: number } = { ...baseCounts };
    const userBetsMap: { [roundId: string]: boolean } = { ...baseUserBets };
    const roundIds = roundsToLoad.map(round => round.id);

    roundIds.forEach(roundId => {
      countsMap[roundId] = 0;
      userBetsMap[roundId] = false;
    });

    for (let i = 0; i < roundIds.length; i += 30) {
      const chunk = roundIds.slice(i, i + 30);
      const betsQuery = query(
        collection(db, 'bets'),
        where('communityId', '==', communityId),
        where('roundId', 'in', chunk)
      );
      const betsSnapshot = await getDocs(betsQuery);

      betsSnapshot.forEach((betDoc) => {
        const bet = betDoc.data();
        const roundId = bet.roundId;
        countsMap[roundId] = (countsMap[roundId] || 0) + 1;
        if (bet.userId === userData?.uid) {
          userBetsMap[roundId] = true;
        }
      });
    }

    setBetsCount(countsMap);
    setUserBets(userBetsMap);
  };

  // Cargar rondas finalizadas con paginación
  const loadFinishedRounds = useCallback(async (loadMore = false) => {
    if (!communityId || (loadMore && !hasMoreFinished) || loadingMoreFinished) return;

    setLoadingMoreFinished(true);
    
    try {
      const recentClosedCutoff = Timestamp.fromMillis(Date.now() - RECENT_CLOSED_DAYS * 24 * 60 * 60 * 1000);
      
      // Query base: rondas antiguas, paginadas de 10 en 10.
      let q = query(
        collection(db, 'rounds'),
        where('communityId', '==', communityId),
        where('deadline', '<', recentClosedCutoff),
        orderBy('deadline', 'desc'),
        limit(FINISHED_PAGE_SIZE)
      );

      // Si es paginación, continuar desde el último documento
      if (loadMore && lastFinishedDoc) {
        q = query(
          collection(db, 'rounds'),
          where('communityId', '==', communityId),
          where('deadline', '<', recentClosedCutoff),
          orderBy('deadline', 'desc'),
          startAfter(lastFinishedDoc),
          limit(FINISHED_PAGE_SIZE)
        );
      }

      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setHasMoreFinished(false);
        setLoadingMoreFinished(false);
        return;
      }

      let newRounds: Round[] = [];
      querySnapshot.forEach((doc) => {
        newRounds.push({ id: doc.id, ...doc.data() } as Round);
      });

      // Filtrar rondas ocultas si el usuario NO es admin
      const visibleRounds = isAdmin ? newRounds : newRounds.filter(round => round.isVisible !== false);

      // Actualizar estado
      if (loadMore) {
        setFinishedRounds(prev => [...prev, ...visibleRounds]);
      } else {
        setFinishedRounds(visibleRounds);
      }

      // Guardar el último documento para paginación
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastFinishedDoc(lastDoc);

      // Si recibimos menos rondas que el límite, no hay más
      setHasMoreFinished(querySnapshot.size === FINISHED_PAGE_SIZE);

      // Cargar contador de apuestas para las nuevas rondas
      await loadBetSummaries(visibleRounds);

    } catch (error) {
      console.error('Error cargando rondas finalizadas:', error);
    } finally {
      setLoadingMoreFinished(false);
    }
  }, [communityId, lastFinishedDoc, hasMoreFinished, loadingMoreFinished, isAdmin, userData?.uid, betsCount, userBets]);

  // Cargar rondas finalizadas cuando se cambia a esa pestaña
  useEffect(() => {
    if (activeTab === 'finished' && finishedRounds.length === 0 && !loading) {
      loadFinishedRounds(false);
    }
  }, [activeTab, loading]);

  // Intersection Observer para scroll infinito
  useEffect(() => {
    if (activeTab !== 'finished' || !hasMoreFinished) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMoreFinished) {
          loadFinishedRounds(true);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeTab, hasMoreFinished, loadingMoreFinished, loadFinishedRounds]);

  const handleSaveDescription = async () => {
    if (!communityId || !isAdmin) return;
    
    setSavingDescription(true);
    try {
      await updateDoc(doc(db, 'communities', communityId), {
        description
      });
      
      if (community) {
        setCommunity({ ...community, description });
      }
      
      setEditingDescription(false);
    } catch (error) {
      console.error('Error al guardar descripción:', error);
      setAlertMessage({ message: 'Error al guardar la descripción', type: 'error' });
    } finally {
      setSavingDescription(false);
    }
  };

  const getStatusBadge = (round: Round) => {
    if (round.status === 'results_posted') {
      return <span className="badge badge-results">Finalizada</span>;
    }
    if (round.status === 'closed') {
      return <span className="badge badge-closed">Cerrada</span>;
    }
    if (new Date(round.deadline.toDate()) < new Date()) {
      return <span className="badge badge-closed">Expirada</span>;
    }
    return <span className="badge badge-open">Abierta</span>;
  };

  // Función para obtener el indicador de si el usuario ya apostó
  const getBetStatusBadge = (roundId: string) => {
    const hasUserBet = userBets[roundId];

    if (hasUserBet) {
      return (
        <span style={{
          fontSize: '11px',
          padding: '4px 8px',
          borderRadius: '12px',
          backgroundColor: '#4caf50',
          color: 'white',
          fontWeight: '500'
        }}>
          ✅ Ya apostaste
        </span>
      );
    }

    return (
      <span style={{
        fontSize: '11px',
        padding: '4px 8px',
        borderRadius: '12px',
        backgroundColor: '#ff9800',
        color: 'white',
        fontWeight: '500'
      }}>
        ⚠️ Pendiente
      </span>
    );
  };

  const filteredRounds = activeTab === 'active' ? rounds : finishedRounds;

  // Calcular contadores para las pestañas
  const activeCount = rounds.length;

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!community) {
    return <div className="loading">Comunidad no encontrada</div>;
  }

  if (showRanking) {
    const leader = rankingRows[0];
    const rest = rankingRows.slice(1);

    return (
      <div>
        <div className="header">
          <div>
            <h1>Ranking</h1>
          </div>
          <button onClick={() => setShowRanking(false)}>Volver</button>
        </div>

        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0, textAlign: 'center' }}>Jornadas ganadas</h2>

            {rankingRows.length === 0 ? (
              <p style={{ margin: 0, color: 'var(--text-secondary)', textAlign: 'center' }}>
                Todavía no hay jornadas ganadas.
              </p>
            ) : (
              <>
                <div style={{
                  textAlign: 'center',
                  padding: '22px 14px',
                  marginBottom: '18px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.22), rgba(25, 118, 210, 0.12))',
                  border: '1px solid rgba(255, 193, 7, 0.45)'
                }}>
                  <div style={{ fontSize: '34px', marginBottom: '6px' }}>🏆</div>
                  <div style={{ fontSize: '22px', fontWeight: 800 }}>{leader.nick}</div>
                  <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {leader.totalWins} {leader.totalWins === 1 ? 'victoria' : 'victorias'}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {rest.map((row, index) => (
                    <div key={row.nick} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: index < rest.length - 1 ? '1px solid var(--border-color)' : 'none',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ fontWeight: 600 }}>{index + 2}. {row.nick}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                        {row.totalWins} {row.totalWins === 1 ? 'victoria' : 'victorias'}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {isSuperAdmin && (
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Ajustes históricos</h3>
              <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
                Suma o resta victorias manuales a las victorias calculadas por la app.
              </p>

              {rankingRows.map((row) => (
                <div key={row.nick} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ flex: 1, fontWeight: 600 }}>{row.nick}</span>
                  <input
                    type="number"
                    className="input"
                    value={rankingAdjustmentDrafts[row.nick] ?? '0'}
                    onChange={(event) => setRankingAdjustmentDrafts(prev => ({ ...prev, [row.nick]: event.target.value }))}
                    disabled={savingRanking}
                    title="Ajuste manual sobre victorias calculadas"
                    style={{ width: '80px', margin: 0, padding: '6px 8px' }}
                  />
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => saveRankingAdjustment(row.nick, rankingAdjustmentDrafts[row.nick] ?? '0')}
                    disabled={savingRanking}
                    style={{ width: 'auto', padding: '6px 10px', margin: 0, fontSize: '13px' }}
                  >
                    Guardar
                  </button>
                </div>
              ))}

              <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Nick"
                    value={newRankingNick}
                    onChange={(event) => setNewRankingNick(event.target.value)}
                    disabled={savingRanking}
                    style={{ flex: '1 1 160px', margin: 0 }}
                  />
                  <input
                    type="number"
                    className="input"
                    value={newRankingWins}
                    onChange={(event) => setNewRankingWins(event.target.value)}
                    disabled={savingRanking}
                    style={{ width: '110px', margin: 0 }}
                  />
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={addManualRankingEntry}
                    disabled={savingRanking || !newRankingNick.trim()}
                    style={{ width: 'auto', padding: '8px 12px', margin: 0 }}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {alertMessage && (
          <CustomAlert
            message={alertMessage.message}
            type={alertMessage.type}
            onClose={() => setAlertMessage(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Notificación de resultados */}
      {communityId && <ResultsNotification communityId={communityId} />}
      
      <div className="header">
        <div>
          <h1>{community.name}</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {isAdmin && (
            <button onClick={handleShareInvitation} title="Compartir invitación" aria-label="Compartir invitación">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
                <path d="M6 12L18 5M6 12L18 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="6" cy="12" r="3" fill="currentColor" />
                <circle cx="18" cy="5" r="3" fill="currentColor" />
                <circle cx="18" cy="19" r="3" fill="currentColor" />
              </svg>
            </button>
          )}
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>

      <div className="container">
        {/* Descripción de la comunidad */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#666', flex: 1 }}>Información</h3>
            {isAdmin && !editingDescription && (
              <button
                className="button button-secondary"
                onClick={() => setEditingDescription(true)}
                style={{ width: 'auto', padding: '6px 12px', fontSize: '14px', marginTop: 0 }}
              >
                Editar
              </button>
            )}
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setShowRanking(true)}
              style={{ width: 'auto', padding: '6px 12px', fontSize: '14px', margin: 0 }}
            >
              Ranking
            </button>
          </div>
          
          {editingDescription ? (
            <div>
              <textarea
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Añade información para los miembros de la comunidad..."
                rows={4}
                style={{ resize: 'vertical', minHeight: '80px' }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="button"
                  onClick={handleSaveDescription}
                  disabled={savingDescription}
                  style={{ flex: 1 }}
                >
                  {savingDescription ? 'Guardando...' : 'Guardar'}
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    setDescription(community?.description || '');
                    setEditingDescription(false);
                  }}
                  disabled={savingDescription}
                  style={{ flex: 1 }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '14px', lineHeight: '1.5' }}>
                {description || (isAdmin ? 'Haz clic en "Editar" para añadir información...' : 'Sin información')}
              </p>
            </div>
          )}

          <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-color)' }}>
            {editingBote ? (
              <div>
                <label className="label">Bote acumulado (€)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  value={boteAmount}
                  onChange={(event) => setBoteAmount(event.target.value)}
                  disabled={savingBote}
                />
                <label className="label">Euros que se suman por jornada visible</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="input"
                  value={botePerRound}
                  onChange={(event) => setBotePerRound(event.target.value)}
                  disabled={savingBote}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="button" onClick={handleSaveBote} disabled={savingBote} style={{ flex: 1 }}>
                    {savingBote ? 'Guardando...' : 'Guardar'}
                  </button>
                  <button
                    className="button button-secondary"
                    onClick={() => {
                      setBoteAmount(String(community.boteAmount || 0));
                      setBotePerRound(String(community.botePerRound || 0));
                      setEditingBote(false);
                    }}
                    disabled={savingBote}
                    style={{ flex: 1 }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '20px', fontWeight: 800 }}>
                  Bote acumulado {(community.boteAmount || 0).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} €
                </p>
                {isAdmin && (
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => setEditingBote(true)}
                    style={{ width: 'auto', padding: '6px 12px', fontSize: '14px', margin: '10px auto 0 auto' }}
                  >
                    Editar bote
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Solo el admin puede crear rondas */}
        {isAdmin && (
          <div className="card">
            <button
              className="button"
              onClick={() => navigate(`/community/${communityId}/create-round`)}
            >
              Crear Nueva Ronda
            </button>
          </div>
        )}

        {/* Pestañas de filtrado */}
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
            <button
              onClick={() => setActiveTab('active')}
              style={{
                flex: 1,
                padding: '16px',
                border: 'none',
                backgroundColor: activeTab === 'active' ? '#1976d2' : 'transparent',
                color: activeTab === 'active' ? 'white' : 'var(--text-primary)',
                fontWeight: activeTab === 'active' ? 'bold' : 'normal',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderBottom: activeTab === 'active' ? '3px solid #1976d2' : '3px solid transparent'
              }}
            >
              📋 Activas ({activeCount})
            </button>
            <button
              onClick={() => setActiveTab('finished')}
              style={{
                flex: 1,
                padding: '16px',
                border: 'none',
                backgroundColor: activeTab === 'finished' ? '#1976d2' : 'transparent',
                color: activeTab === 'finished' ? 'white' : 'var(--text-primary)',
                fontWeight: activeTab === 'finished' ? 'bold' : 'normal',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderBottom: activeTab === 'finished' ? '3px solid #1976d2' : '3px solid transparent'
              }}
            >
              ✅ Finalizadas
            </button>
          </div>
        </div>

        {filteredRounds.length === 0 ? (
          <div className="empty-state">
            <p>{activeTab === 'active' ? 'No hay rondas activas' : 'No hay rondas finalizadas'}</p>
            {activeTab === 'active' && isAdmin && <p>Crea la primera ronda de apuestas</p>}
          </div>
        ) : (
          <div className="card">
            <h2 style={{ marginTop: 0 }}>
              {activeTab === 'active' ? 'Rondas Activas' : 'Rondas Finalizadas'}
            </h2>
            {filteredRounds.map((round) => (
              <div
                key={round.id}
                className="list-item"
                onClick={() => navigate(`/community/${communityId}/round/${round.id}`)}
                style={{
                  borderLeft: round.isVisible === false ? '4px solid #FF9800' : 'none',
                  opacity: round.isVisible === false ? 0.7 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ margin: 0, fontSize: '18px' }}>
                        {round.name}
                      </h3>
                      {isAdmin && round.isVisible === false && (
                        <span style={{
                          fontSize: '12px',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          backgroundColor: '#FF9800',
                          color: 'white',
                          fontWeight: 'normal'
                        }}>
                          🔒 Oculta
                        </span>
                      )}
                    </div>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      {(() => {
                        const timeInfo = formatTimeRemaining(round.deadline);
                        return (
                          <span style={{ color: timeInfo.color, fontWeight: '500' }}>
                            {timeInfo.icon} {timeInfo.text}
                          </span>
                        );
                      })()}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
                      <p style={{ margin: 0, color: '#007bff', fontSize: '13px', fontWeight: '500' }}>
                        {betsCount[round.id] || 0} {(betsCount[round.id] || 0) === 1 ? 'apuesta' : 'apuestas'}
                      </p>
                      {getBetStatusBadge(round.id)}
                    </div>
                  </div>
                  {getStatusBadge(round)}
                </div>
              </div>
            ))}

            {/* Trigger para scroll infinito (solo en pestaña finalizadas) */}
            {activeTab === 'finished' && hasMoreFinished && (
              <div 
                ref={loadMoreRef}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  color: 'var(--text-secondary)'
                }}
              >
                {loadingMoreFinished ? '⏳ Cargando más rondas...' : 'Sigue bajando para cargar más jornadas'}
              </div>
            )}

            {/* Mensaje cuando no hay más rondas */}
            {activeTab === 'finished' && !hasMoreFinished && finishedRounds.length > 0 && (
              <div style={{
                padding: '20px',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '14px'
              }}>
                ✓ No hay más rondas finalizadas
              </div>
            )}
          </div>
        )}
      </div>

      {/* Alerta personalizada */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}
    </div>
  );
};

export default CommunityDashboard;
