import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  collection, 
  query, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  writeBatch,
  orderBy,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Community, Round } from '../types';

const SuperAdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const { isSuperAdmin } = useAuth();
  const [communities, setCommunities] = useState<Community[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCommunity, setEditingCommunity] = useState<Community | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    // Redirigir si no es super admin
    if (!isSuperAdmin) {
      navigate('/communities');
      return;
    }
    loadCommunities();
  }, [isSuperAdmin, navigate]);

  const loadCommunities = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'communities'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const communitiesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Community[];
      setCommunities(communitiesData);
    } catch (error) {
      console.error('Error al cargar comunidades:', error);
      alert('Error al cargar comunidades');
    } finally {
      setLoading(false);
    }
  };

  const loadRoundsForCommunity = async (communityId: string) => {
    try {
      const q = query(
        collection(db, 'rounds'),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      const allRounds = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Round[];
      
      // Filtrar solo las rondas de la comunidad seleccionada
      const communityRounds = allRounds.filter(r => r.communityId === communityId);
      setRounds(communityRounds);
      setSelectedCommunity(communityId);
    } catch (error) {
      console.error('Error al cargar rondas:', error);
      alert('Error al cargar rondas');
    }
  };

  const handleEditCommunity = (community: Community) => {
    setEditingCommunity(community);
    setEditName(community.name);
    setEditDescription(community.description || '');
  };

  const handleSaveCommunity = async () => {
    if (!editingCommunity) return;

    if (!editName.trim()) {
      alert('El nombre no puede estar vacío');
      return;
    }

    try {
      const communityRef = doc(db, 'communities', editingCommunity.id);
      await updateDoc(communityRef, {
        name: editName.trim(),
        description: editDescription.trim()
      });
      
      alert('Comunidad actualizada correctamente');
      setEditingCommunity(null);
      loadCommunities();
    } catch (error) {
      console.error('Error al actualizar comunidad:', error);
      alert('Error al actualizar la comunidad');
    }
  };

  const handleDeleteCommunity = async (community: Community) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar la comunidad "${community.name}"?\n\n` +
      `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
      `- La comunidad\n` +
      `- Todas sus rondas\n` +
      `- Todas las apuestas de esas rondas\n\n` +
      `Esta acción NO se puede deshacer.`
    );

    if (!confirmDelete) return;

    try {
      let totalBetsDeleted = 0;
      
      // 1. Buscar todas las rondas de esta comunidad
      const roundsQuery = query(collection(db, 'rounds'), where('communityId', '==', community.id));
      const roundsSnapshot = await getDocs(roundsQuery);
      
      console.log(`Eliminando ${roundsSnapshot.size} rondas...`);
      
      // 2. Por cada ronda, eliminar sus apuestas
      for (const roundDoc of roundsSnapshot.docs) {
        const betsQuery = query(collection(db, 'bets'), where('roundId', '==', roundDoc.id));
        const betsSnapshot = await getDocs(betsQuery);
        
        console.log(`Ronda ${roundDoc.id}: ${betsSnapshot.size} apuestas`);
        
        // Eliminar apuestas en batches de 500
        const betsToDelete = betsSnapshot.docs;
        for (let i = 0; i < betsToDelete.length; i += 500) {
          const batch = writeBatch(db);
          const chunk = betsToDelete.slice(i, i + 500);
          
          chunk.forEach(betDoc => {
            batch.delete(doc(db, 'bets', betDoc.id));
          });
          
          await batch.commit();
          totalBetsDeleted += chunk.length;
        }
        
        // Eliminar la ronda
        await deleteDoc(doc(db, 'rounds', roundDoc.id));
      }
      
      // 3. Eliminar la comunidad
      await deleteDoc(doc(db, 'communities', community.id));
      
      alert(`✅ Comunidad eliminada correctamente.\n\nRondas eliminadas: ${roundsSnapshot.size}\nApuestas eliminadas: ${totalBetsDeleted}`);
      loadCommunities();
      if (selectedCommunity === community.id) {
        setSelectedCommunity(null);
        setRounds([]);
      }
    } catch (error: any) {
      console.error('Error al eliminar comunidad:', error);
      alert('❌ Error al eliminar la comunidad:\n\n' + (error.message || error.toString()));
    }
  };

  const handleDeleteRound = async (round: Round) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar la ronda "${round.name}"?\n\n` +
      `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
      `- La ronda\n` +
      `- Todas las apuestas de esta ronda\n\n` +
      `Esta acción NO se puede deshacer.`
    );

    if (!confirmDelete) return;

    try {
      // 1. Eliminar todas las apuestas de esta ronda
      const betsQuery = query(collection(db, 'bets'), where('roundId', '==', round.id));
      const betsSnapshot = await getDocs(betsQuery);
      
      console.log(`Eliminando ${betsSnapshot.size} apuestas de la ronda ${round.id}...`);
      
      // Eliminar apuestas en batches de 500
      const betsToDelete = betsSnapshot.docs;
      for (let i = 0; i < betsToDelete.length; i += 500) {
        const batch = writeBatch(db);
        const chunk = betsToDelete.slice(i, i + 500);
        
        chunk.forEach(betDoc => {
          batch.delete(doc(db, 'bets', betDoc.id));
        });
        
        await batch.commit();
      }
      
      // 2. Eliminar la ronda
      await deleteDoc(doc(db, 'rounds', round.id));
      
      alert(`✅ Ronda eliminada correctamente.\n\nApuestas eliminadas: ${betsSnapshot.size}`);
      if (selectedCommunity) {
        loadRoundsForCommunity(selectedCommunity);
      }
    } catch (error: any) {
      console.error('Error al eliminar ronda:', error);
      alert('❌ Error al eliminar la ronda:\n\n' + (error.message || error.toString()));
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    return timestamp.toDate().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>🔧 Panel de Super Administrador</h1>
        <button onClick={() => navigate('/communities')}>
          ← Volver
        </button>
      </div>

      <div className="container">

      {/* Modal de edición */}
      {editingCommunity && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%'
          }}>
            <h3>Editar Comunidad</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Descripción:</label>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows={4}
                style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button onClick={() => setEditingCommunity(null)} style={{ padding: '10px 20px' }}>
                Cancelar
              </button>
              <button 
                onClick={handleSaveCommunity}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#4CAF50', 
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de comunidades */}
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Todas las Comunidades ({communities.length})</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '15px',
          marginTop: '15px'
        }}>
          {communities.map(community => (
            <div 
              key={community.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: selectedCommunity === community.id ? '#e3f2fd' : 'white'
              }}
            >
              <h3 style={{ marginTop: 0 }}>{community.name}</h3>
              {community.description && (
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                  {community.description}
                </p>
              )}
              <p style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>
                Creada: {formatDate(community.createdAt)}
              </p>
              <p style={{ fontSize: '12px', color: '#999', marginBottom: '15px' }}>
                Miembros: {community.membersCount}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => loadRoundsForCommunity(community.id)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  Ver Rondas
                </button>
                <button
                  onClick={() => handleEditCommunity(community)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#FF9800',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteCommunity(community)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lista de rondas de la comunidad seleccionada */}
      {selectedCommunity && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Rondas de la Comunidad ({rounds.length})</h2>
          {rounds.length === 0 ? (
            <p style={{ color: '#999' }}>No hay rondas en esta comunidad</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
              {rounds.map(round => (
                <div 
                  key={round.id}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '15px',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{round.name}</h3>
                      <p style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                        <strong>Estado:</strong> {
                          round.status === 'open' ? '🟢 Abierta' :
                          round.status === 'closed' ? '🔴 Cerrada' :
                          '✅ Resultados Publicados'
                        }
                      </p>
                      <p style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                        <strong>Fecha límite:</strong> {formatDate(round.deadline)}
                      </p>
                      <p style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                        <strong>Creada:</strong> {formatDate(round.createdAt)}
                      </p>
                      <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                        <strong>Partidos:</strong> {round.matches.length}
                      </p>
                      {round.status === 'results_posted' && round.winnerNick && (
                        <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#4CAF50' }}>
                          🏆 Ganador: {round.winnerNick}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteRound(round)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '13px'
                      }}
                    >
                      Eliminar Ronda
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default SuperAdminPanel;
