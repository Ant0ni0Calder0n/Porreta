import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Bet, Prediction } from '../types';

const CreateBet: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  
  const [round, setRound] = useState<Round | null>(null);
  const [existingBet, setExistingBet] = useState<Bet | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([
    { type: 'exact', homeGoals: undefined, awayGoals: undefined },
    { type: 'exact', homeGoals: undefined, awayGoals: undefined },
    { type: '1X2', pick: '1' }
  ]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const buildInitialPredictions = (roundData: Round, existingPredictions: Prediction[] = []) => {
    return roundData.matches.map((match, index) => {
      const existingPrediction = existingPredictions[index];
      if (existingPrediction?.type === match.type) return existingPrediction;

      if (match.type === 'exact') {
        return { type: 'exact', homeGoals: undefined, awayGoals: undefined } as Prediction;
      }
      return { type: '1X2', pick: '1' } as Prediction;
    });
  };

  useEffect(() => {
    loadData();
  }, [roundId]);

  const loadData = async () => {
    if (!roundId || !communityId || !currentUser) return;

    try {
      // Cargar ronda
      const roundDoc = await getDoc(doc(db, 'rounds', roundId));
      if (roundDoc.exists()) {
        const roundData = { id: roundDoc.id, ...roundDoc.data() } as Round;
        setRound(roundData);

        // Verificar si ya hay apuesta
        const q = query(
          collection(db, 'bets'),
          where('roundId', '==', roundId),
          where('communityId', '==', communityId),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const betData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as Bet;
          setExistingBet(betData);
          setPredictions(buildInitialPredictions(roundData, betData.predictions));
        } else {
          // Inicializar predicciones vacías según los partidos de la ronda
          setPredictions(buildInitialPredictions(roundData));
        }
      }
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePredictionChange = (index: number, field: string, value: any) => {
    const newPredictions = [...predictions];
    (newPredictions[index] as any)[field] = value;
    setPredictions(newPredictions);
  };

  const checkDuplicate = async () => {
    if (!roundId || !communityId) return false;

    try {
      const q = query(
        collection(db, 'bets'),
        where('roundId', '==', roundId),
        where('communityId', '==', communityId)
      );
      const querySnapshot = await getDocs(q);
      
      for (const doc of querySnapshot.docs) {
        if (doc.id === existingBet?.id) continue; // Ignorar propia apuesta
        
        const bet = doc.data() as Bet;
        if (bet.predictions.length !== predictions.length) continue;

        const isDuplicate = bet.predictions.every((pred, idx) => {
          const myPred = predictions[idx];
          if (!myPred || pred.type !== myPred.type) return false;
          if (pred.type === 'exact') {
            return pred.homeGoals === myPred.homeGoals && pred.awayGoals === myPred.awayGoals;
          }
          return pred.pick === myPred.pick;
        });

        if (isDuplicate) return true;
      }
    } catch (error) {
      console.error('Error verificando duplicados:', error);
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent, forceSave = false) => {
    e.preventDefault();

    if (submitting) return;

    if (!round || !currentUser || !userData || !communityId || !roundId) return;

    // Validar que todos los campos estén completos
    for (let i = 0; i < predictions.length; i++) {
      const pred = predictions[i];
      if (pred.type === 'exact') {
        if (pred.homeGoals === undefined || pred.awayGoals === undefined) {
          setError(`Por favor, completa el resultado del partido ${i + 1}`);
          return;
        }
      }
    }

    // Validar deadline
    if (new Date(round.deadline.toDate()) <= new Date()) {
      setError('El plazo para apostar ha expirado');
      return;
    }

    setError('');
    setSubmitting(true);

    // Verificar duplicados si no se fuerza el guardado
    if (!forceSave) {
      const isDuplicate = await checkDuplicate();
      if (isDuplicate) {
        setSubmitting(false);
        setShowDuplicateModal(true);
        return;
      }
    }

    try {
      const betData = {
        roundId,
        communityId,
        userId: currentUser.uid,
        userNick: userData.nick,
        predictions,
        duplicateWarningShown: forceSave,
        updatedAt: new Date()
      };

      const betId = existingBet?.id ?? `${roundId}_${currentUser.uid}`;
      await setDoc(doc(db, 'bets', betId), {
        ...betData,
        ...(existingBet ? {} : { createdAt: new Date() })
      }, { merge: true });

      console.log('✅ Apuesta guardada para roundId:', roundId);

      // Navegar de vuelta con state para forzar recarga
      navigate(`/community/${communityId}/round/${roundId}`, { 
        replace: true,
        state: { refresh: true, timestamp: Date.now() }
      });
    } catch (err: any) {
      setError('Error guardando apuesta: ' + (err.message || 'Error desconocido'));
    } finally {
      setSubmitting(false);
    }
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
        <h1>{existingBet ? 'Modificar Apuesta' : 'Hacer Apuesta'}</h1>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>

      <div className="container">
        <form onSubmit={(e) => handleSubmit(e, false)}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Tus Pronósticos</h2>

            {round.matches.map((match, idx) => (
              <div key={idx} style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
                  {match.homeTeam} vs {match.awayTeam}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                  {match.type === 'exact' ? 'Resultado Exacto' : '1/X/2'}
                </p>

                {match.type === 'exact' ? (
                  <div className="match-input-group">
                    <input
                      type="number"
                      min="0"
                      className="input"
                      value={predictions[idx].homeGoals === undefined ? '' : predictions[idx].homeGoals}
                      onChange={(e) => handlePredictionChange(idx, 'homeGoals', e.target.value === '' ? undefined : parseInt(e.target.value))}
                      disabled={submitting}
                      placeholder="0"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      min="0"
                      className="input"
                      value={predictions[idx].awayGoals === undefined ? '' : predictions[idx].awayGoals}
                      onChange={(e) => handlePredictionChange(idx, 'awayGoals', e.target.value === '' ? undefined : parseInt(e.target.value))}
                      disabled={submitting}
                      placeholder="0"
                    />
                  </div>
                ) : (
                  <select
                    className="input"
                    value={predictions[idx].pick || '1'}
                    onChange={(e) => handlePredictionChange(idx, 'pick', e.target.value)}
                    disabled={submitting}
                  >
                    <option value="1">1 - Local ({match.homeTeam})</option>
                    <option value="X">X - Empate</option>
                    <option value="2">2 - Visitante ({match.awayTeam})</option>
                  </select>
                )}
              </div>
            ))}

            {error && <div className="error">{error}</div>}

            <button type="submit" className="button" disabled={submitting}>
              {submitting ? 'Guardando...' : existingBet ? 'Actualizar Apuesta' : 'Enviar Apuesta'}
            </button>
          </div>
        </form>
      </div>

      {showDuplicateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Apuesta Duplicada</h2>
            <p>Ya existe una apuesta idéntica a la tuya. ¿Quieres enviarla de todas formas?</p>
            <button
              className="button"
              onClick={(e) => {
                setShowDuplicateModal(false);
                handleSubmit(e as any, true);
              }}
            >
              Sí, Enviar de Todas Formas
            </button>
            <button
              className="button button-secondary"
              onClick={() => setShowDuplicateModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBet;
