import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Round } from '../types';

interface ResultsNotificationProps {
  communityId: string;
}

const ResultsNotification: React.FC<ResultsNotificationProps> = ({ communityId }) => {
  const { currentUser } = useAuth();
  const [newResults, setNewResults] = useState<Round[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    checkForNewResults();
  }, [communityId, currentUser]);

  const playBoteSound = async () => {
    try {
      // Reproducir sonido
      const audio = new Audio('/Porreta/bote.mpeg');
      audio.volume = 0.8;
      await audio.play();
    } catch (err) {
      console.log('No se pudo reproducir el sonido:', err);
    }
    
    // Vibrar el dispositivo (independientemente del sonido)
    if (navigator.vibrate) {
      navigator.vibrate([300, 100, 300, 100, 300]); // 💥 Patrón de vibración
    }
  };

  const checkForNewResults = async () => {
    if (!currentUser || !communityId) return;

    try {
      // Buscar rondas con resultados publicados
      const roundsQuery = query(
        collection(db, 'rounds'),
        where('communityId', '==', communityId),
        where('status', '==', 'results_posted')
      );
      
      const roundsSnapshot = await getDocs(roundsQuery);
      const rounds: Round[] = [];
      
      roundsSnapshot.forEach((doc) => {
        rounds.push({ id: doc.id, ...doc.data() } as Round);
      });

      // Filtrar rondas que el usuario no ha visto
      const unseenRounds = rounds.filter((round) => {
        const key = `seen_result_${round.id}`;
        return !localStorage.getItem(key);
      });

      if (unseenRounds.length > 0) {
        setNewResults(unseenRounds);
        setShow(true);
        
        // 🔊 Reproducir sonido si hay BOTE
        const hasBote = unseenRounds.some(round => round.winnerNick === 'BOTE');
        if (hasBote) {
          playBoteSound();
        }
      }
    } catch (error) {
      console.error('Error verificando resultados:', error);
    }
  };

  const handleClose = () => {
    // Marcar como visto en localStorage
    newResults.forEach((round) => {
      localStorage.setItem(`seen_result_${round.id}`, 'true');
    });
    setShow(false);
    setNewResults([]);
  };

  if (!show || newResults.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '16px', color: '#1976d2' }}>
          🎉 ¡Resultados Publicados!
        </h2>
        
        {newResults.map((round) => {
          const isBote = round.winnerNick === 'BOTE';
          const isMultipleWinners = !isBote && round.winnerNick?.includes(',');
          const isWinner = round.winnerId === currentUser?.uid || 
                          (isMultipleWinners && round.winnerNick?.includes(currentUser?.uid || ''));
          
          return (
            <div key={round.id} style={{
              padding: '16px',
              marginBottom: '12px',
              backgroundColor: isBote ? 'rgba(255, 193, 7, 0.2)' : 'rgba(76, 175, 80, 0.2)',
              borderRadius: '4px',
              border: isBote ? '2px solid #ffc107' : '2px solid #4caf50'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--text-primary)' }}>
                {round.name}
              </h3>
              <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: isBote ? '#ffc107' : '#4caf50' }}>
                {isBote ? (
                  '💰¡¡¡¡ BOOOOTEEEE !!!!'
                ) : isMultipleWinners ? (
                  <>
                    {isWinner && '🏆 ¡FELICIDADES, HAS GANADO!'}
                    <br />
                    👑 Ganadores: {round.winnerNick}
                  </>
                ) : isWinner ? (
                  '🏆 ¡FELICIDADES, HAS GANADO!'
                ) : (
                  `👑 Ganador: ${round.winnerNick}`
                )}
              </p>
            </div>
          );
        })}

        <button
          onClick={handleClose}
          className="button"
          style={{ width: '100%', marginTop: '16px' }}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ResultsNotification;
