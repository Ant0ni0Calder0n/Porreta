import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, orderBy, doc, getDoc, updateDoc, Timestamp, limit, startAfter, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Community } from '../types';
import ResultsNotification from './ResultsNotification';
import CustomAlert from './CustomAlert';

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
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [community, setCommunity] = useState<Community | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [betsCount, setBetsCount] = useState<{ [roundId: string]: number }>({});
  const [userBets, setUserBets] = useState<{ [roundId: string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [editingDescription, setEditingDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [savingDescription, setSavingDescription] = useState(false);
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

    console.log('🔄 Cargando datos para comunidad:', communityId);
    
    try {
      // Cargar comunidad
      const communityDoc = await getDoc(doc(db, 'communities', communityId));
      if (communityDoc.exists()) {
        const communityData = { id: communityDoc.id, ...communityDoc.data() } as Community;
        setCommunity(communityData);
        setDescription(communityData.description || '');
      }

      // Cargar rondas
      const q = query(
        collection(db, 'rounds'),
        where('communityId', '==', communityId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      console.log('📊 Rondas encontradas:', querySnapshot.size);
      
      let roundsData: Round[] = [];
      querySnapshot.forEach((doc) => {
        roundsData.push({ id: doc.id, ...doc.data() } as Round);
      });

      // Filtrar rondas ocultas si el usuario NO es admin
      if (!isAdmin) {
        roundsData = roundsData.filter(round => round.isVisible !== false);
      }

      // Ordenar por deadline ascendente (más cercana primero)
      roundsData.sort((a, b) => a.deadline.toMillis() - b.deadline.toMillis());

      setRounds(roundsData);

      // Cargar contador de apuestas por cada ronda y verificar apuestas del usuario
      const countsMap: { [roundId: string]: number } = {};
      const userBetsMap: { [roundId: string]: boolean } = {};
      
      for (const round of roundsData) {
        // Contar total de apuestas
        const betsQuery = query(
          collection(db, 'bets'),
          where('roundId', '==', round.id)
        );
        const betsSnapshot = await getDocs(betsQuery);
        countsMap[round.id] = betsSnapshot.size;
        
        // Verificar si el usuario actual ya apostó
        if (userData?.uid) {
          const userBetQuery = query(
            collection(db, 'bets'),
            where('roundId', '==', round.id),
            where('userId', '==', userData.uid)
          );
          const userBetSnapshot = await getDocs(userBetQuery);
          userBetsMap[round.id] = !userBetSnapshot.empty;
        }
      }
      
      setBetsCount(countsMap);
      setUserBets(userBetsMap);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar rondas finalizadas con paginación
  const loadFinishedRounds = useCallback(async (loadMore = false) => {
    if (!communityId || (loadMore && !hasMoreFinished) || loadingMoreFinished) return;

    setLoadingMoreFinished(true);
    
    try {
      const FINISHED_PAGE_SIZE = 10;
      
      // Query base: rondas finalizadas (results_posted) ordenadas por fecha de publicación descendente
      let q = query(
        collection(db, 'rounds'),
        where('communityId', '==', communityId),
        where('status', '==', 'results_posted'),
        orderBy('resultsPublishedAt', 'desc'),
        limit(FINISHED_PAGE_SIZE)
      );

      // Si es paginación, continuar desde el último documento
      if (loadMore && lastFinishedDoc) {
        q = query(
          collection(db, 'rounds'),
          where('communityId', '==', communityId),
          where('status', '==', 'results_posted'),
          orderBy('resultsPublishedAt', 'desc'),
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

      const newRounds: Round[] = [];
      querySnapshot.forEach((doc) => {
        const round = { id: doc.id, ...doc.data() } as Round;
        
        // Filtrar solo las que tienen más de 7 días
        if (round.resultsPublishedAt) {
          const daysSincePublished = (Date.now() - round.resultsPublishedAt.toMillis()) / (1000 * 60 * 60 * 24);
          if (daysSincePublished >= 7) {
            newRounds.push(round);
          }
        } else {
          // Rondas antiguas sin timestamp (backward compatibility)
          newRounds.push(round);
        }
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
      const countsMap: { [roundId: string]: number } = { ...betsCount };
      const userBetsMap: { [roundId: string]: boolean } = { ...userBets };
      
      for (const round of visibleRounds) {
        // Solo cargar si no tenemos los datos ya
        if (countsMap[round.id] === undefined) {
          const betsQuery = query(
            collection(db, 'bets'),
            where('roundId', '==', round.id)
          );
          const betsSnapshot = await getDocs(betsQuery);
          countsMap[round.id] = betsSnapshot.size;

          const userHasBet = betsSnapshot.docs.some(doc => doc.data().userId === userData?.uid);
          userBetsMap[round.id] = userHasBet;
        }
      }

      setBetsCount(countsMap);
      setUserBets(userBetsMap);

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

  // Filtrar rondas según la pestaña activa
  const filteredRounds = activeTab === 'active' 
    ? rounds.filter(round => {
        // Activas: open, closed, o results_posted de hace menos de 7 días
        if (round.status === 'open' || round.status === 'closed') {
          return true;
        }
        
        // Si tiene resultados publicados, verificar si hace menos de 7 días
        if (round.status === 'results_posted' && round.resultsPublishedAt) {
          const daysSincePublished = (Date.now() - round.resultsPublishedAt.toMillis()) / (1000 * 60 * 60 * 24);
          return daysSincePublished < 7;
        }
        
        return false;
      })
    : finishedRounds; // Para finalizadas, usar el array con lazy loading

  // Calcular contadores para las pestañas
  const activeCount = rounds.filter(r => {
    if (r.status === 'open' || r.status === 'closed') return true;
    if (r.status === 'results_posted' && r.resultsPublishedAt) {
      const daysSincePublished = (Date.now() - r.resultsPublishedAt.toMillis()) / (1000 * 60 * 60 * 24);
      return daysSincePublished < 7;
    }
    return false;
  }).length;

  // Para finalizadas, mostrar el contador de lo cargado + indicador si hay más
  const finishedCountDisplay = hasMoreFinished ? `${finishedRounds.length}+` : finishedRounds.length.toString();

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!community) {
    return <div className="loading">Comunidad no encontrada</div>;
  }

  return (
    <div>
      {/* Notificación de resultados */}
      {communityId && <ResultsNotification communityId={communityId} />}
      
      <div className="header">
        <div>
          <h1>{community.name}</h1>
        </div>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>

      <div className="container">
        {/* Descripción de la comunidad */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#666' }}>Información</h3>
            {isAdmin && !editingDescription && (
              <button
                className="button button-secondary"
                onClick={() => setEditingDescription(true)}
                style={{ width: 'auto', padding: '6px 12px', fontSize: '14px', marginTop: 0 }}
              >
                Editar
              </button>
            )}
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
            <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '14px', lineHeight: '1.5' }}>
              {description || (isAdmin ? 'Haz clic en "Editar" para añadir información...' : 'Sin información')}
            </p>
          )}
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
              ✅ Finalizadas ({finishedCountDisplay})
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
                {loadingMoreFinished && '⏳ Cargando más rondas...'}
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
