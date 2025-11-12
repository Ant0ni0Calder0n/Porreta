import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Match } from '../types';

const CreateRound: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [matches, setMatches] = useState<Match[]>([
    { homeTeam: '', awayTeam: '', type: 'exact' },
    { homeTeam: '', awayTeam: '', type: 'exact' },
    { homeTeam: '', awayTeam: '', type: '1X2' }
  ]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMatchChange = (index: number, field: 'homeTeam' | 'awayTeam', value: string) => {
    const newMatches = [...matches];
    newMatches[index][field] = value;
    setMatches(newMatches);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Debes poner un nombre a la ronda');
      return;
    }

    if (!deadline) {
      setError('Debes establecer una hora límite');
      return;
    }

    const deadlineDate = new Date(deadline);
    if (deadlineDate <= new Date()) {
      setError('La hora límite debe ser en el futuro');
      return;
    }

    for (const match of matches) {
      if (!match.homeTeam || !match.awayTeam) {
        setError('Completa todos los equipos');
        return;
      }
    }

    if (!currentUser || !communityId) return;

    setError('');
    setLoading(true);

    try {
      const roundDoc = await addDoc(collection(db, 'rounds'), {
        communityId,
        createdBy: currentUser.uid,
        createdAt: new Date(),
        name: name.trim(),
        deadline: deadlineDate,
        matches,
        status: 'open',
        isVisible: isVisible
      });
      
      console.log('✅ Ronda creada con ID:', roundDoc.id);
      console.log('📍 CommunityId:', communityId);

      // Navegar de vuelta sin replace
      navigate(`/community/${communityId}`);
    } catch (err: any) {
      setError('Error creando ronda: ' + (err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Crear Ronda</h1>
        <button onClick={() => navigate(`/community/${communityId}`)}>Volver</button>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Información de la Ronda</h2>
            
            <div>
              <label className="label">Nombre de la Ronda</label>
              <input
                type="text"
                className="input"
                placeholder="Ej: Jornada 10, Ronda Navidad, etc."
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="label">Hora Límite</label>
              <input
                type="datetime-local"
                className="input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                disabled={loading}
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <input
                  type="checkbox"
                  checked={isVisible}
                  onChange={(e) => setIsVisible(e.target.checked)}
                  disabled={loading}
                  style={{ marginRight: '8px', width: '18px', height: '18px' }}
                />
                <span style={{ fontSize: '14px' }}>
                  {isVisible ? '👁️ Ronda visible para todos los usuarios' : '🔒 Ronda oculta (solo admins)'}
                </span>
              </label>
              <p style={{ margin: '8px 0 0 26px', fontSize: '13px', color: '#666'}}>
                {isVisible
                ? 'Los usuarios podrán ver y apostar en esta ronda inmediatamente.'
                : 'La ronda estará oculta para los usuarios. Solo tú (admin) podrás verla y hacerla visible más tarde.'}
              </p>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Partidos</h2>

            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Partido 1 (Resultado Exacto)</h3>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                className="input"
                placeholder="Equipo Local"
                value={matches[0].homeTeam}
                onChange={(e) => handleMatchChange(0, 'homeTeam', e.target.value)}
                disabled={loading}
              />
              <input
                type="text"
                className="input"
                placeholder="Equipo Visitante"
                value={matches[0].awayTeam}
                onChange={(e) => handleMatchChange(0, 'awayTeam', e.target.value)}
                disabled={loading}
              />
            </div>

            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Partido 2 (Resultado Exacto)</h3>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                className="input"
                placeholder="Equipo Local"
                value={matches[1].homeTeam}
                onChange={(e) => handleMatchChange(1, 'homeTeam', e.target.value)}
                disabled={loading}
              />
              <input
                type="text"
                className="input"
                placeholder="Equipo Visitante"
                value={matches[1].awayTeam}
                onChange={(e) => handleMatchChange(1, 'awayTeam', e.target.value)}
                disabled={loading}
              />
            </div>

            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Partido 3 (1 X 2)</h3>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                className="input"
                placeholder="Equipo Local"
                value={matches[2].homeTeam}
                onChange={(e) => handleMatchChange(2, 'homeTeam', e.target.value)}
                disabled={loading}
              />
              <input
                type="text"
                className="input"
                placeholder="Equipo Visitante"
                value={matches[2].awayTeam}
                onChange={(e) => handleMatchChange(2, 'awayTeam', e.target.value)}
                disabled={loading}
              />
            </div>

            {error && <div className="error">{error}</div>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Creando...' : 'Crear Ronda'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRound;
