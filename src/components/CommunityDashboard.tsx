import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs, orderBy, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Community } from '../types';

const CommunityDashboard: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [community, setCommunity] = useState<Community | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [betsCount, setBetsCount] = useState<{[roundId: string]: number}>({});
  const [loading, setLoading] = useState(true);
  const [editingDescription, setEditingDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [savingDescription, setSavingDescription] = useState(false);

  const isAdmin = userData?.communities[communityId || ''] === 'admin';

  useEffect(() => {
    loadData();
  }, [communityId]);

  const loadData = async () => {
    if (!communityId) return;

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
      const roundsData: Round[] = [];
      querySnapshot.forEach((doc) => {
        roundsData.push({ id: doc.id, ...doc.data() } as Round);
      });
      setRounds(roundsData);

      // Cargar conteo de apuestas por ronda
      const countsMap: {[roundId: string]: number} = {};
      for (const round of roundsData) {
        const betsQuery = query(
          collection(db, 'bets'),
          where('roundId', '==', round.id)
        );
        const betsSnapshot = await getDocs(betsQuery);
        countsMap[round.id] = betsSnapshot.size;
      }
      setBetsCount(countsMap);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

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
      console.error('Error guardando descripción:', error);
      alert('Error al guardar la descripción');
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

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!community) {
    return <div className="loading">Comunidad no encontrada</div>;
  }

  return (
    <div>
      <div className="header">
        <div>
          <h1>{community.name}</h1>
        </div>
        <button onClick={() => navigate('/communities')}>Volver</button>
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

        {rounds.length === 0 ? (
          <div className="empty-state">
            <p>No hay rondas todavía</p>
            <p>Crea la primera ronda de apuestas</p>
          </div>
        ) : (
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Rondas</h2>
            {rounds.map((round) => (
              <div
                key={round.id}
                className="list-item"
                onClick={() => navigate(`/community/${communityId}/round/${round.id}`)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>
                      Ronda {new Date(round.createdAt.toDate()).toLocaleDateString()}
                    </h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      Límite: {new Date(round.deadline.toDate()).toLocaleString()}
                    </p>
                    <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '13px', fontWeight: '500' }}>
                      {betsCount[round.id] || 0} {(betsCount[round.id] || 0) === 1 ? 'apuesta' : 'apuestas'}
                    </p>
                  </div>
                  {getStatusBadge(round)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityDashboard;
