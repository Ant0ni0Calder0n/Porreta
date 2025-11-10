import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Bet } from '../types';

const RoundDetail: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [round, setRound] = useState<Round | null>(null);
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = userData?.communities[communityId || ''] === 'admin';

  useEffect(() => {
    loadData();
  }, [roundId, location.state]);

  // Recargar apuestas cuando la ventana recibe foco (al volver de crear apuesta)
  useEffect(() => {
    const handleFocus = () => {
      loadData();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [roundId]);

  const loadData = async () => {
    if (!roundId) return;

    console.log('🔄 Cargando ronda:', roundId);
    console.log('👤 Usuario actual:', currentUser?.uid);

    try {
      // Cargar ronda
      const roundDoc = await getDoc(doc(db, 'rounds', roundId));
      if (roundDoc.exists()) {
        const roundData = { id: roundDoc.id, ...roundDoc.data() } as Round;
        console.log('📋 Ronda cargada:', {
          id: roundData.id,
          name: roundData.name,
          communityId: roundData.communityId
        });
        setRound(roundData);
      } else {
        console.error('❌ Ronda no encontrada');
      }

      // Cargar apuestas
      console.log('🔍 Buscando apuestas para roundId:', roundId);
      const q = query(collection(db, 'bets'), where('roundId', '==', roundId));
      const querySnapshot = await getDocs(q);
      console.log('📊 Apuestas encontradas:', querySnapshot.size);
      
      const betsData: Bet[] = [];
      querySnapshot.forEach((doc) => {
        const betData = doc.data();
        console.log('✅ Apuesta encontrada:', {
          id: doc.id,
          userId: betData.userId,
          userNick: betData.userNick,
          roundId: betData.roundId
        });
        betsData.push({ id: doc.id, ...betData } as Bet);
      });
      
      console.log('📦 Total apuestas cargadas:', betsData.length);
      setBets(betsData);
    } catch (error) {
      console.error('❌ Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const userBet = bets.find((bet) => bet.userId === currentUser?.uid);
  const canBet = round && new Date(round.deadline.toDate()) > new Date();

  // Función para calcular si una apuesta sigue "viva" basado en liveResults
  const calculateBetStatus = (bet: Bet): { isAlive: boolean; points: number } => {
    if (!round?.liveResults || round.liveResults.length === 0) {
      return { isAlive: true, points: 0 }; // Sin resultados en vivo, todas están vivas
    }

    let points = 0;
    let hasDefinitiveFailure = false;

    round.liveResults.forEach((liveResult, index) => {
      if (liveResult.status === 'pending') return; // Ignorar partidos pendientes

      const prediction = bet.predictions[index];
      
      if (liveResult.type === 'exact') {
        // Para resultado exacto
        if (liveResult.homeGoals !== undefined && liveResult.awayGoals !== undefined) {
          if (prediction.homeGoals === liveResult.homeGoals && 
              prediction.awayGoals === liveResult.awayGoals) {
            points++;
          } else {
            hasDefinitiveFailure = true; // Falló en un resultado exacto
          }
        }
      } else if (liveResult.type === '1X2') {
        // Para 1X2
        if (liveResult.result && prediction.pick === liveResult.result) {
          points++;
        }
      }
    });

    return { isAlive: !hasDefinitiveFailure, points };
  };

  // Ordenar apuestas: vivas primero, luego eliminadas
  const sortedBets = [...bets].sort((a, b) => {
    const statusA = calculateBetStatus(a);
    const statusB = calculateBetStatus(b);
    
    if (statusA.isAlive && !statusB.isAlive) return -1;
    if (!statusA.isAlive && statusB.isAlive) return 1;
    
    // Si ambas tienen el mismo estado, ordenar por puntos
    return statusB.points - statusA.points;
  });

  const formatPrediction = (pred: any) => {
    if (pred.type === 'exact') {
      return `${pred.homeGoals} - ${pred.awayGoals}`;
    }
    return pred.pick === '1' ? 'Local' : pred.pick === 'X' ? 'Empate' : 'Visitante';
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!round) {
    return <div className="loading">Ronda no encontrada</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Detalle Ronda</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => loadData()}>🔄 Recargar</button>
          <button onClick={() => navigate(`/community/${communityId}`)}>Volver</button>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Partidos</h2>
          {round.matches.map((match, idx) => (
            <div key={idx} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: idx < 2 ? '1px solid #eee' : 'none' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: '500' }}>
                {match.homeTeam} vs {match.awayTeam}
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                Tipo: {match.type === 'exact' ? 'Resultado Exacto' : '1/X/2'}
              </p>
            </div>
          ))}
          
          <p style={{ marginTop: '16px', marginBottom: '4px', fontWeight: '500' }}>
            Hora límite:
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            {new Date(round.deadline.toDate()).toLocaleString()}
          </p>
        </div>

        {canBet && (
          <div className="card">
            <button
              className="button"
              onClick={() => navigate(`/community/${communityId}/round/${roundId}/bet`)}
            >
              {userBet ? 'Modificar Mi Apuesta' : 'Hacer Mi Apuesta'}
            </button>
          </div>
        )}

        {isAdmin && !canBet && round.status !== 'results_posted' && (
          <div className="card">
            <button
              className="button"
              onClick={() => navigate(`/community/${communityId}/round/${roundId}/results`)}
            >
              📊 Actualizar Resultados
            </button>
          </div>
        )}

        {round.liveResults && round.liveResults.some(lr => lr.status !== 'pending') && (
          <div className="card" style={{ backgroundColor: '#fff3e0', borderLeft: '4px solid #FF9800' }}>
            <h3 style={{ marginTop: 0, color: '#F57C00' }}>🔴 Resultados En Vivo</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              El admin está actualizando resultados. Las apuestas en <strong style={{ color: '#4CAF50' }}>verde</strong> siguen vivas, 
              las de <strong style={{ color: '#f44336' }}>rojo</strong> ya no pueden ganar.
            </p>
            {round.liveResults.map((lr, idx) => (
              lr.status !== 'pending' && (
                <p key={idx} style={{ margin: '8px 0', fontSize: '14px' }}>
                  <strong>{round.matches[idx].homeTeam} vs {round.matches[idx].awayTeam}:</strong>{' '}
                  {lr.type === 'exact' 
                    ? `${lr.homeGoals} - ${lr.awayGoals}` 
                    : lr.result === '1' ? 'Local' : lr.result === 'X' ? 'Empate' : 'Visitante'}
                  {lr.status === 'final' ? ' ✅' : ' 🔴'}
                </p>
              )
            ))}
          </div>
        )}

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Apuestas ({bets.length})</h2>
          {bets.length === 0 ? (
            <div className="empty-state">No hay apuestas todavía</div>
          ) : (
            sortedBets.map((bet) => {
              const status = calculateBetStatus(bet);
              const hasLiveResults = round.liveResults && round.liveResults.some(lr => lr.status !== 'pending');
              
              return (
                <div
                  key={bet.id}
                  style={{
                    padding: '12px',
                    marginBottom: '12px',
                    backgroundColor: bet.userId === currentUser?.uid 
                      ? '#e3f2fd' 
                      : hasLiveResults
                        ? status.isAlive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'
                        : '#f5f5f5',
                    borderRadius: '4px',
                    borderLeft: hasLiveResults 
                      ? `4px solid ${status.isAlive ? '#4CAF50' : '#f44336'}`
                      : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>
                      {bet.userNick}
                      {bet.userId === currentUser?.uid && ' (Tú)'}
                    </p>
                    {hasLiveResults && (
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        backgroundColor: status.isAlive ? '#4CAF50' : '#f44336',
                        color: 'white'
                      }}>
                        {status.isAlive ? `🟢 Viva (${status.points} pts)` : '🔴 Eliminada'}
                      </span>
                    )}
                  </div>
                  {bet.predictions.map((pred, idx) => (
                    <p key={idx} style={{ margin: '4px 0', fontSize: '14px' }}>
                      {round.matches[idx].homeTeam} vs {round.matches[idx].awayTeam}:{' '}
                      <strong>{formatPrediction(pred)}</strong>
                    </p>
                  ))}
                </div>
              );
            })
          )}
        </div>

        {round.status === 'results_posted' && round.results && (
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Resultados Reales</h2>
            {round.results.map((result, idx) => (
              <p key={idx} style={{ margin: '8px 0' }}>
                {round.matches[idx].homeTeam} vs {round.matches[idx].awayTeam}:{' '}
                <strong>
                  {result.type === 'exact'
                    ? `${result.homeGoals} - ${result.awayGoals}`
                    : result.result === '1'
                    ? 'Local'
                    : result.result === 'X'
                    ? 'Empate'
                    : 'Visitante'}
                </strong>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoundDetail;
