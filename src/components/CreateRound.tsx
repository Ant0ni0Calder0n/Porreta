import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc, doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseDb';
import { Community, Match, MatchType } from '../types';

const CreateRound: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [matches, setMatches] = useState<Match[]>([
    { homeTeam: '', awayTeam: '', type: 'exact' }
  ]);
  const [community, setCommunity] = useState<Community | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCommunity = async () => {
      if (!communityId) return;
      const communityDoc = await getDoc(doc(db, 'communities', communityId));
      if (communityDoc.exists()) {
        setCommunity({ id: communityDoc.id, ...communityDoc.data() } as Community);
      }
    };

    loadCommunity().catch(() => undefined);
  }, [communityId]);

  const handleMatchChange = (index: number, field: 'homeTeam' | 'awayTeam' | 'type', value: string) => {
    const newMatches = [...matches];
    if (field === 'type') {
      newMatches[index].type = value as MatchType;
    } else {
      newMatches[index][field] = value;
    }
    setMatches(newMatches);
  };

  const addMatch = () => {
    setMatches([...matches, { homeTeam: '', awayTeam: '', type: 'exact' }]);
  };

  const removeMatch = (index: number) => {
    if (matches.length === 1) {
      setError('La ronda debe tener al menos un partido');
      return;
    }
    setMatches(matches.filter((_, idx) => idx !== index));
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

    if (matches.length === 0) {
      setError('Añade al menos un partido');
      return;
    }

    for (const match of matches) {
      if (!match.homeTeam.trim() || !match.awayTeam.trim()) {
        setError('Completa todos los equipos');
        return;
      }
    }

    if (!currentUser || !communityId) return;

    setError('');
    setLoading(true);

    try {
      await addDoc(collection(db, 'rounds'), {
        communityId,
        createdBy: currentUser.uid,
        createdAt: new Date(),
        name: name.trim(),
        deadline: deadlineDate,
        matches: matches.map(match => ({
          ...match,
          homeTeam: match.homeTeam.trim(),
          awayTeam: match.awayTeam.trim()
        })),
        status: 'open',
        isVisible: isVisible
      });

      const botePerRound = community?.botePerRound || 0;
      if (isVisible && botePerRound > 0) {
        await updateDoc(doc(db, 'communities', communityId), {
          boteAmount: increment(botePerRound)
        });
      }

      // Navegar de vuelta sin replace
      navigate(`/community/${communityId}`, { replace: true });
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
        <button onClick={() => navigate(-1)}>Volver</button>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
              <h2 style={{ marginTop: 0, marginBottom: 0, whiteSpace: 'nowrap' }}>Partidos ({matches.length})</h2>
              <button
                type="button"
                className="button button-secondary"
                onClick={addMatch}
                disabled={loading}
                style={{ width: 'auto', padding: '8px 12px', fontSize: '14px', whiteSpace: 'nowrap' }}
              >
                Añadir Partido
              </button>
            </div>

            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
              Puedes crear jornadas con cualquier número de partidos y elegir el tipo de apuesta de cada uno.
            </p>

            {matches.map((match, index) => (
              <div key={index} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: index < matches.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>Partido {index + 1}</h3>
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => removeMatch(index)}
                    disabled={loading || matches.length === 1}
                    style={{ width: 'auto', padding: '8px 12px' }}
                  >
                    Quitar
                  </button>
                </div>

                <label className="label">Tipo de apuesta</label>
                <select
                  className="input"
                  value={match.type}
                  onChange={(e) => handleMatchChange(index, 'type', e.target.value)}
                  disabled={loading}
                >
                  <option value="exact">Resultado Exacto</option>
                  <option value="1X2">1 X 2</option>
                </select>

                <input
                  type="text"
                  className="input"
                  placeholder="Equipo Local"
                  value={match.homeTeam}
                  onChange={(e) => handleMatchChange(index, 'homeTeam', e.target.value)}
                  disabled={loading}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Equipo Visitante"
                  value={match.awayTeam}
                  onChange={(e) => handleMatchChange(index, 'awayTeam', e.target.value)}
                  disabled={loading}
                />
              </div>
            ))}

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
