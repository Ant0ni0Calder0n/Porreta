import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Round, LiveResult, MatchStatus, MatchResult, Bet } from '../types';

const PublishResults: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [round, setRound] = useState<Round | null>(null);
  const [liveResults, setLiveResults] = useState<LiveResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadRound();
  }, [roundId]);

  const loadRound = async () => {
    if (!roundId) return;

    try {
      const roundDoc = await getDoc(doc(db, 'rounds', roundId));
      if (roundDoc.exists()) {
        const roundData = { id: roundDoc.id, ...roundDoc.data() } as Round;
        setRound(roundData);

        // Inicializar liveResults si no existen
        if (roundData.liveResults && roundData.liveResults.length > 0) {
          setLiveResults(roundData.liveResults);
        } else {
          // Crear estructura inicial
          const initialResults: LiveResult[] = roundData.matches.map((match, index) => ({
            matchIndex: index,
            status: 'pending' as MatchStatus,
            type: match.type,
            homeGoals: undefined,
            awayGoals: undefined,
            result: undefined
          }));
          setLiveResults(initialResults);
        }
      }
    } catch (error) {
      console.error('Error al cargar ronda:', error);
      alert('Error al cargar la ronda');
    } finally {
      setLoading(false);
    }
  };

  const handleResultChange = (index: number, field: string, value: any) => {
    const newResults = [...liveResults];
    if (field === 'status') {
      newResults[index].status = value as MatchStatus;
    } else if (field === 'homeGoals') {
      newResults[index].homeGoals = value === '' ? undefined : parseInt(value);
    } else if (field === 'awayGoals') {
      newResults[index].awayGoals = value === '' ? undefined : parseInt(value);
    } else if (field === 'result') {
      newResults[index].result = value;
    }
    setLiveResults(newResults);
  };

  const handleSave = async () => {
    if (!roundId || !round) return;

    // Validar que los partidos con status != 'pending' tengan resultados
    for (let i = 0; i < liveResults.length; i++) {
      const lr = liveResults[i];
      if (lr.status !== 'pending') {
        if (lr.type === 'exact') {
          if (lr.homeGoals === undefined || lr.awayGoals === undefined) {
            alert(`El partido ${i + 1} está marcado como "${lr.status}" pero no tiene goles definidos`);
            return;
          }
        } else if (lr.type === '1X2') {
          if (!lr.result) {
            alert(`El partido ${i + 1} está marcado como "${lr.status}" pero no tiene resultado 1X2 definido`);
            return;
          }
        }
      }
    }

    try {
      setSaving(true);
      
      // Si todos están finalizados, publicar resultados oficiales
      if (allMatchesFinal()) {
        await publishFinalResults();
      } else {
        // Solo guardar liveResults - limpiar undefined
        const cleanedLiveResults = liveResults.map(lr => ({
          matchIndex: lr.matchIndex,
          status: lr.status,
          type: lr.type,
          ...(lr.type === 'exact' && {
            homeGoals: lr.homeGoals ?? 0,
            awayGoals: lr.awayGoals ?? 0
          }),
          ...(lr.type === '1X2' && {
            result: lr.result ?? '1'
          })
        }));
        
        const roundRef = doc(db, 'rounds', roundId);
        await updateDoc(roundRef, {
          liveResults: cleanedLiveResults
        });
        alert('✅ Resultados actualizados correctamente');
        navigate(`/community/${communityId}/round/${roundId}`);
      }
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('❌ Error al guardar los resultados');
    } finally {
      setSaving(false);
    }
  };

  const publishFinalResults = async () => {
    if (!round || !roundId || !communityId) return;

    try {
      // Convertir liveResults a MatchResult[]
      const results: MatchResult[] = liveResults.map(lr => ({
        type: lr.type,
        homeGoals: lr.homeGoals,
        awayGoals: lr.awayGoals,
        result: lr.result
      }));

      // Calcular ganador
      const betsQuery = query(collection(db, 'bets'), where('roundId', '==', roundId));
      const betsSnapshot = await getDocs(betsQuery);
      const bets: Bet[] = [];
      betsSnapshot.forEach((doc) => {
        bets.push({ id: doc.id, ...doc.data() } as Bet);
      });

      let winnerId: string | null = null;
      let winnerNick: string | null = null;
      let maxPoints = 0;
      let winners: Bet[] = [];

      // Calcular puntos para cada apuesta
      bets.forEach((bet) => {
        let points = 0;
        bet.predictions.forEach((pred, idx) => {
          const result = results[idx];
          
          if (pred.type === 'exact' && result.type === 'exact') {
            if (pred.homeGoals === result.homeGoals && pred.awayGoals === result.awayGoals) {
              points += 1;
            }
          } else if (pred.type === '1X2' && result.type === '1X2') {
            if (pred.pick === result.result) {
              points += 1;
            }
          }
        });

        if (points > maxPoints) {
          maxPoints = points;
          winners = [bet];
        } else if (points === maxPoints && points > 0) {
          winners.push(bet);
        }
      });

      // Determinar ganador
      if (winners.length === 1 && maxPoints > 0) {
        winnerId = winners[0].userId;
        winnerNick = winners[0].userNick;
      } else if (winners.length > 1 && maxPoints > 0) {
        winnerId = null;
        winnerNick = winners.map(w => w.userNick).join(', ');
      } else {
        winnerId = null;
        winnerNick = 'BOTE';
      }

      console.log('🏆 Ganador calculado:', { winnerId, winnerNick, maxPoints });

      await updateDoc(doc(db, 'rounds', roundId), {
        results,
        status: 'results_posted',
        winnerId,
        winnerNick,
        liveResults: null
      });

      alert('🏆 ¡Resultados oficiales publicados!');
      navigate(`/community/${communityId}/round/${roundId}`);
    } catch (err: any) {
      console.error('Error publicando resultados:', err);
      throw err;
    }
  };

  const allMatchesFinal = () => {
    return liveResults.every(lr => lr.status === 'final');
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Cargando...</div>;
  }

  if (!round) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Ronda no encontrada</div>;
  }

  const isAdmin = userData?.communities[communityId || ''] === 'admin';
  if (!isAdmin) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>No tienes permisos de administrador</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Actualizar Resultados</h1>
        <button onClick={() => navigate(`/community/${communityId}/round/${roundId}`)}>
          ← Volver
        </button>
      </div>

      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>{round.name}</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: 0 }}>
            Actualiza los resultados a medida que se van conociendo. Cuando todos estén marcados como "Terminado", 
            se publicarán automáticamente los resultados oficiales.
          </p>
        </div>

        {allMatchesFinal() && (
          <div style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            ✅ Todos los partidos están TERMINADOS. Al guardar, se publicarán automáticamente los resultados oficiales y se calculará el ganador.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {round.matches.map((match, index) => {
          const lr = liveResults[index];
          return (
            <div 
              key={index}
              style={{
                border: '2px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: lr.status === 'final' ? '#e8f5e9' : lr.status === 'live' ? '#fff3e0' : 'white'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ margin: 0 }}>
                  Partido {index + 1}: {match.homeTeam} vs {match.awayTeam}
                </h3>
                <span style={{ 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: match.type === 'exact' ? '#2196F3' : '#FF9800',
                  color: 'white'
                }}>
                  {match.type === 'exact' ? 'Resultado Exacto' : '1X2'}
                </span>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Estado del partido:
                </label>
                <select
                  value={lr.status}
                  onChange={(e) => handleResultChange(index, 'status', e.target.value)}
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                  }}
                >
                  <option value="pending">⏳ Pendiente (sin resultado)</option>
                  <option value="live">🔴 En Vivo (puede cambiar)</option>
                  <option value="final">✅ Final (confirmado)</option>
                </select>
              </div>

              {lr.status !== 'pending' && (
                <div>
                  {match.type === 'exact' ? (
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                          Goles {match.homeTeam}:
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={lr.homeGoals ?? ''}
                          onChange={(e) => handleResultChange(index, 'homeGoals', e.target.value)}
                          style={{
                            padding: '10px',
                            fontSize: '18px',
                            width: '100%',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                          }}
                          placeholder="0"
                        />
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>-</div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                          Goles {match.awayTeam}:
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={lr.awayGoals ?? ''}
                          onChange={(e) => handleResultChange(index, 'awayGoals', e.target.value)}
                          style={{
                            padding: '10px',
                            fontSize: '18px',
                            width: '100%',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                          }}
                          placeholder="0"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Resultado:
                      </label>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        {['1', 'X', '2'].map((option) => (
                          <button
                            key={option}
                            onClick={() => handleResultChange(index, 'result', option)}
                            style={{
                              flex: 1,
                              padding: '15px',
                              fontSize: '18px',
                              fontWeight: 'bold',
                              backgroundColor: lr.result === option ? '#4CAF50' : '#f0f0f0',
                              color: lr.result === option ? 'white' : 'black',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            {option === '1' ? `Victoria ${match.homeTeam}` :
                             option === 'X' ? 'Empate' :
                             `Victoria ${match.awayTeam}`}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        </div>

        <div className="card">
          <button
            onClick={handleSave}
            disabled={saving}
            className="button"
            style={{
              width: '100%',
              backgroundColor: allMatchesFinal() ? '#FF5722' : '#4CAF50',
              cursor: saving ? 'not-allowed' : 'pointer'
            }}
          >
            {saving ? 'Guardando...' : allMatchesFinal() ? '🏆 Guardar y Publicar Resultados Oficiales' : '💾 Guardar Resultados'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishResults;
