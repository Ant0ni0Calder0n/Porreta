import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, MatchResult } from '../types';

const PublishResults: React.FC = () => {
  const { communityId, roundId } = useParams<{ communityId: string; roundId: string }>();
  const { userData } = useAuth();
  const navigate = useNavigate();
  
  const [round, setRound] = useState<Round | null>(null);
  const [results, setResults] = useState<MatchResult[]>([
    { type: 'exact', homeGoals: 0, awayGoals: 0 },
    { type: 'exact', homeGoals: 0, awayGoals: 0 },
    { type: '1X2', result: '1' }
  ]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const isAdmin = userData?.communities[communityId || ''] === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      navigate(`/community/${communityId}/round/${roundId}`);
      return;
    }
    loadData();
  }, [roundId, isAdmin]);

  const loadData = async () => {
    if (!roundId) return;

    try {
      const roundDoc = await getDoc(doc(db, 'rounds', roundId));
      if (roundDoc.exists()) {
        const roundData = { id: roundDoc.id, ...roundDoc.data() } as Round;
        setRound(roundData);
        if (roundData.results) {
          setResults(roundData.results);
        }
      }
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResultChange = (index: number, field: string, value: any) => {
    const newResults = [...results];
    (newResults[index] as any)[field] = value;
    setResults(newResults);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!round || !roundId) return;

    setError('');
    setSubmitting(true);

    try {
      await updateDoc(doc(db, 'rounds', roundId), {
        results,
        status: 'results_posted'
      });

      navigate(`/community/${communityId}/round/${roundId}`);
    } catch (err: any) {
      setError('Error publicando resultados: ' + (err.message || 'Error desconocido'));
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
        <h1>Publicar Resultados</h1>
        <button onClick={() => navigate(`/community/${communityId}/round/${roundId}`)}>Volver</button>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Resultados Reales</h2>

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
                      value={results[idx].homeGoals || 0}
                      onChange={(e) => handleResultChange(idx, 'homeGoals', parseInt(e.target.value) || 0)}
                      disabled={submitting}
                      placeholder="0"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      min="0"
                      className="input"
                      value={results[idx].awayGoals || 0}
                      onChange={(e) => handleResultChange(idx, 'awayGoals', parseInt(e.target.value) || 0)}
                      disabled={submitting}
                      placeholder="0"
                    />
                  </div>
                ) : (
                  <select
                    className="input"
                    value={results[idx].result || '1'}
                    onChange={(e) => handleResultChange(idx, 'result', e.target.value)}
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
              {submitting ? 'Publicando...' : 'Publicar Resultados'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishResults;
