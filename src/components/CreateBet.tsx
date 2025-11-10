import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Bet, Prediction } from '../types';

const CreateBet: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  
  const [round, setRound] = useState<Round | null>(null);
  const [existingBet, setExistingBet] = useState<Bet | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([
    { type: 'exact', homeGoals: 0, awayGoals: 0 },
    { type: 'exact', homeGoals: 0, awayGoals: 0 },
    { type: '1X2', pick: '1' }
  ]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  useEffect(() => {
    loadData();
  }, [roundId]);

  const loadData = async () => {
    if (!roundId || !currentUser) return;

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
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const betData = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as Bet;
          setExistingBet(betData);
          setPredictions(betData.predictions);
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
    if (!roundId) return false;

    try {
      const q = query(collection(db, 'bets'), where('roundId', '==', roundId));
      const querySnapshot = await getDocs(q);
      
      for (const doc of querySnapshot.docs) {
        if (doc.id === existingBet?.id) continue; // Ignorar propia apuesta
        
        const bet = doc.data() as Bet;
        const isDuplicate = bet.predictions.every((pred, idx) => {
          const myPred = predictions[idx];
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

    if (!round || !currentUser || !userData || !communityId || !roundId) return;

    // Validar deadline
    if (new Date(round.deadline.toDate()) <= new Date()) {
      setError('El plazo para apostar ha expirado');
      return;
    }

    setError('');

    // Verificar duplicados si no se fuerza el guardado
    if (!forceSave) {
      const isDuplicate = await checkDuplicate();
      if (isDuplicate) {
        setShowDuplicateModal(true);
        return;
      }
    }

    setSubmitting(true);

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

      if (existingBet) {
        // Actualizar apuesta existente
        await updateDoc(doc(db, 'bets', existingBet.id), betData);
      } else {
        // Crear nueva apuesta
        await addDoc(collection(db, 'bets'), {
          ...betData,
          createdAt: new Date()
        });
      }

      navigate(`/community/${communityId}/round/${roundId}`);
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
        <button onClick={() => navigate(`/community/${communityId}/round/${roundId}`)}>Volver</button>
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
                      value={predictions[idx].homeGoals || 0}
                      onChange={(e) => handlePredictionChange(idx, 'homeGoals', parseInt(e.target.value) || 0)}
                      disabled={submitting}
                      placeholder="0"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      min="0"
                      className="input"
                      value={predictions[idx].awayGoals || 0}
                      onChange={(e) => handlePredictionChange(idx, 'awayGoals', parseInt(e.target.value) || 0)}
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
