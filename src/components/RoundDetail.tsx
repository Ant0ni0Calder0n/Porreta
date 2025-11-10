import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Bet } from '../types';

const RoundDetail: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const [round, setRound] = useState<Round | null>(null);
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = userData?.communities[communityId || ''] === 'admin';

  useEffect(() => {
    loadData();
  }, [roundId]);

  const loadData = async () => {
    if (!roundId) return;

    try {
      // Cargar ronda
      const roundDoc = await getDoc(doc(db, 'rounds', roundId));
      if (roundDoc.exists()) {
        setRound({ id: roundDoc.id, ...roundDoc.data() } as Round);
      }

      // Cargar apuestas
      const q = query(collection(db, 'bets'), where('roundId', '==', roundId));
      const querySnapshot = await getDocs(q);
      const betsData: Bet[] = [];
      querySnapshot.forEach((doc) => {
        betsData.push({ id: doc.id, ...doc.data() } as Bet);
      });
      setBets(betsData);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const userBet = bets.find((bet) => bet.userId === currentUser?.uid);
  const canBet = round && new Date(round.deadline.toDate()) > new Date();

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
        <button onClick={() => navigate(`/community/${communityId}`)}>Volver</button>
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

        {isAdmin && round.status === 'open' && !canBet && (
          <div className="card">
            <button
              className="button"
              onClick={() => navigate(`/community/${communityId}/round/${roundId}/results`)}
            >
              Publicar Resultados
            </button>
          </div>
        )}

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Apuestas ({bets.length})</h2>
          {bets.length === 0 ? (
            <div className="empty-state">No hay apuestas todavía</div>
          ) : (
            bets.map((bet) => (
              <div
                key={bet.id}
                style={{
                  padding: '12px',
                  marginBottom: '12px',
                  backgroundColor: bet.userId === currentUser?.uid ? '#e3f2fd' : '#f5f5f5',
                  borderRadius: '4px'
                }}
              >
                <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>
                  {bet.userNick}
                  {bet.userId === currentUser?.uid && ' (Tú)'}
                </p>
                {bet.predictions.map((pred, idx) => (
                  <p key={idx} style={{ margin: '4px 0', fontSize: '14px' }}>
                    {round.matches[idx].homeTeam} vs {round.matches[idx].awayTeam}:{' '}
                    <strong>{formatPrediction(pred)}</strong>
                  </p>
                ))}
              </div>
            ))
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
