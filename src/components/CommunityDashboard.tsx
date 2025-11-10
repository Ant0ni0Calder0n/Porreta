import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Round, Community } from '../types';

const CommunityDashboard: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const navigate = useNavigate();
  const [community, setCommunity] = useState<Community | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [communityId]);

  const loadData = async () => {
    if (!communityId) return;

    try {
      // Cargar comunidad
      const communityDoc = await getDoc(doc(db, 'communities', communityId));
      if (communityDoc.exists()) {
        setCommunity({ id: communityDoc.id, ...communityDoc.data() } as Community);
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
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
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
        <div className="card">
          <button
            className="button"
            onClick={() => navigate(`/community/${communityId}/create-round`)}
          >
            Crear Nueva Ronda
          </button>
        </div>

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
                  <div>
                    <h3 style={{ margin: '0 0 8px 0' }}>
                      Ronda {new Date(round.createdAt.toDate()).toLocaleDateString()}
                    </h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      Límite: {new Date(round.deadline.toDate()).toLocaleString()}
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
