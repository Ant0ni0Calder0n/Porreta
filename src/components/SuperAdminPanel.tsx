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
  Timestamp,
  getDoc,
  setDoc,
  deleteField
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Community, Round } from '../types';
import CustomAlert from './CustomAlert';
import CustomConfirm from './CustomConfirm';

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
  const [editingRound, setEditingRound] = useState<Round | null>(null);
  const [editRoundName, setEditRoundName] = useState('');
  const [editRoundDeadline, setEditRoundDeadline] = useState('');
  const [editRoundMatches, setEditRoundMatches] = useState<any[]>([]);
  
  // Estados para configuración global
  const [allowUserRegistration, setAllowUserRegistration] = useState(true);
  const [allowCommunityCreation, setAllowCommunityCreation] = useState(true);
  const [savingConfig, setSavingConfig] = useState(false);
  
  // Estados para alertas y confirmaciones
  const [alertMessage, setAlertMessage] = useState<{ message: string; type: 'info' | 'warning' | 'error' | 'success' } | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ message: string; onConfirm: () => void } | null>(null);

  useEffect(() => {
    // Redirigir si no es super admin
    if (!isSuperAdmin) {
      navigate('/communities');
      return;
    }
    loadCommunities();
    loadGlobalConfig();
  }, [isSuperAdmin, navigate]);

  const loadGlobalConfig = async () => {
    try {
      const configDoc = await getDoc(doc(db, 'config', 'global'));
      if (configDoc.exists()) {
        const data = configDoc.data();
        setAllowUserRegistration(data.allowUserRegistration ?? true);
        setAllowCommunityCreation(data.allowCommunityCreation ?? true);
      }
    } catch (error) {
      console.error('Error cargando configuración:', error);
    }
  };

  const saveGlobalConfig = async (field: 'allowUserRegistration' | 'allowCommunityCreation', value: boolean) => {
    setSavingConfig(true);
    try {
      await setDoc(doc(db, 'config', 'global'), {
        [field]: value
      }, { merge: true });
      
      if (field === 'allowUserRegistration') {
        setAllowUserRegistration(value);
      } else {
        setAllowCommunityCreation(value);
      }
    } catch (error) {
      console.error('Error guardando configuración:', error);
      setAlertMessage({ message: 'Error al guardar la configuración', type: 'error' });
    } finally {
      setSavingConfig(false);
    }
  };

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
      setAlertMessage({ message: 'Error al cargar comunidades', type: 'error' });
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
      console.error('Error cargando rondas:', error);
      setAlertMessage({ message: 'Error al cargar rondas', type: 'error' });
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
      setAlertMessage({ message: 'El nombre no puede estar vacío', type: 'warning' });
      return;
    }

    try {
      const communityRef = doc(db, 'communities', editingCommunity.id);
      await updateDoc(communityRef, {
        name: editName.trim(),
        description: editDescription.trim()
      });
      
      setAlertMessage({ message: 'Comunidad actualizada correctamente', type: 'success' });
      setEditingCommunity(null);
      loadCommunities();
    } catch (error) {
      console.error('Error actualizando comunidad:', error);
      setAlertMessage({ message: 'Error al actualizar la comunidad', type: 'error' });
    }
  };

  const handleEditRound = (round: Round) => {
    setEditingRound(round);
    setEditRoundName(round.name);
    
    // Convertir Timestamp a string de fecha/hora LOCAL para el input
    const deadlineDate = round.deadline.toDate();
    // Restar el offset de zona horaria para obtener la hora local correcta
    const localDate = new Date(deadlineDate.getTime() - deadlineDate.getTimezoneOffset() * 60000);
    const formattedDeadline = localDate.toISOString().slice(0, 16); // formato: YYYY-MM-DDTHH:mm
    setEditRoundDeadline(formattedDeadline);
    
    setEditRoundMatches(round.matches);
  };

  const handleSaveRound = async () => {
    if (!editingRound) return;

    if (!editRoundName.trim()) {
      setAlertMessage({ message: 'El nombre no puede estar vacío', type: 'warning' });
      return;
    }

    if (!editRoundDeadline) {
      setAlertMessage({ message: 'La fecha límite es obligatoria', type: 'warning' });
      return;
    }

    try {
      const roundRef = doc(db, 'rounds', editingRound.id);
      await updateDoc(roundRef, {
        name: editRoundName.trim(),
        deadline: Timestamp.fromDate(new Date(editRoundDeadline)),
        matches: editRoundMatches
      });

      setAlertMessage({ message: 'Ronda actualizada correctamente', type: 'success' });
      setEditingRound(null);
      if (selectedCommunity) {
        loadRoundsForCommunity(selectedCommunity);
      }
    } catch (error) {
      console.error('Error actualizando ronda:', error);
      setAlertMessage({ message: 'Error al actualizar la ronda', type: 'error' });
    }
  };

  const handleDeleteCommunity = async (community: Community) => {
    setConfirmDialog({
      message: `¿Estás seguro de que quieres eliminar la comunidad "${community.name}"?\n\n` +
        `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
        `- La comunidad\n` +
        `- Todas sus rondas\n` +
        `- Todas las apuestas de esas rondas\n\n` +
        `Esta acción NO se puede deshacer.`,
      onConfirm: async () => {
        setConfirmDialog(null);
        await executeCommunityDelete(community);
      }
    });
  };

  const executeCommunityDelete = async (community: Community) => {

    try {
      let totalBetsDeleted = 0;
      let totalUsersUpdated = 0;
      
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
      
      // 3. Eliminar referencias de la comunidad en usuarios
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersToUpdate: string[] = [];

      // Identificar qué usuarios tienen esta comunidad
      usersSnapshot.docs.forEach(userDoc => {
        const userData = userDoc.data();
        if (userData.communities && userData.communities[community.id]) {
          usersToUpdate.push(userDoc.id);
        }
      });

      console.log(`Eliminando referencias de ${usersToUpdate.length} usuarios...`);

      // Actualizar usuarios en batches de 500
      for (let i = 0; i < usersToUpdate.length; i += 500) {
        const batch = writeBatch(db);
        const chunk = usersToUpdate.slice(i, i + 500);

        chunk.forEach(userId => {
          const userRef = doc(db, 'users', userId);
          batch.update(userRef, {
            [`communities.${community.id}`]: deleteField()
          });
        });

        await batch.commit();
      }

      totalUsersUpdated = usersToUpdate.length;
      // 4. Finalmente, eliminar la comunidad
      await deleteDoc(doc(db, 'communities', community.id));
      
      setAlertMessage({ 
        message: `Comunidad eliminada correctamente.\n\nRondas eliminadas: ${roundsSnapshot.size}\nApuestas eliminadas: ${totalBetsDeleted}\nUsuarios actualizados: ${totalUsersUpdated}`,
        type: 'success' 
      });
      loadCommunities();
      if (selectedCommunity === community.id) {
        setSelectedCommunity(null);
        setRounds([]);
      }
    } catch (error: any) {
      console.error('Error al eliminar comunidad:', error);
      setAlertMessage({ 
        message: 'Error al eliminar la comunidad:\n\n' + (error.message || error.toString()),
        type: 'error' 
      });
    }
  };

  const handleDeleteRound = async (round: Round) => {
    setConfirmDialog({
      message: `¿Estás seguro de que quieres eliminar la ronda "${round.name}"?\n\n` +
        `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
        `- La ronda\n` +
        `- Todas las apuestas de esta ronda\n\n` +
        `Esta acción NO se puede deshacer.`,
      onConfirm: async () => {
        setConfirmDialog(null);
        await executeRoundDelete(round);
      }
    });
  };

  const executeRoundDelete = async (round: Round) => {

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
      
      setAlertMessage({ 
        message: `Ronda eliminada correctamente.\n\nApuestas eliminadas: ${betsSnapshot.size}`,
        type: 'success' 
      });
      if (selectedCommunity) {
        loadRoundsForCommunity(selectedCommunity);
      }
    } catch (error: any) {
      console.error('Error al eliminar ronda:', error);
      setAlertMessage({ 
        message: 'Error al eliminar la ronda:\n\n' + (error.message || error.toString()),
        type: 'error' 
      });
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

        {/* Configuración Global */}
        <div className="card" style={{ marginBottom: '24px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderLeft: '4px solid #ff9800' }}>
          <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--text-primary)' }}>
            ⚙️ Configuración Global de Acceso
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Checkbox para registro de usuarios */}
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'pointer',
              padding: '12px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}>
              <input
                type="checkbox"
                checked={allowUserRegistration}
                onChange={(e) => saveGlobalConfig('allowUserRegistration', e.target.checked)}
                disabled={savingConfig}
                style={{ 
                  width: '20px', 
                  height: '20px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  👤 Permitir registro de nuevos usuarios
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {allowUserRegistration 
                    ? '✅ Los usuarios pueden crear nuevas cuentas' 
                    : '🚫 Registro de usuarios deshabilitado'}
                </div>
              </div>
            </label>

            {/* Checkbox para creación de comunidades */}
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'pointer',
              padding: '12px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}>
              <input
                type="checkbox"
                checked={allowCommunityCreation}
                onChange={(e) => saveGlobalConfig('allowCommunityCreation', e.target.checked)}
                disabled={savingConfig}
                style={{ 
                  width: '20px', 
                  height: '20px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  🏘️ Permitir creación de nuevas comunidades
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {allowCommunityCreation 
                    ? '✅ Los usuarios pueden crear comunidades' 
                    : '🚫 Creación de comunidades deshabilitada'}
                </div>
              </div>
            </label>
          </div>

          <div style={{ 
            marginTop: '12px', 
            padding: '12px', 
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'var(--text-secondary)'
          }}>
            💡 <strong>Nota:</strong> Estos ajustes controlan el acceso a nivel global de la aplicación. 
            Úsalos para mantener la app privada y controlar quién puede registrarse o crear comunidades.
          </div>
        </div>

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
          <div className="modal">
            <h3>Editar Comunidad</h3>
            <div style={{ marginBottom: '15px' }}>
              <label className="label">Nombre:</label>
              <input
                type="text"
                className="input"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label className="label">Descripción:</label>
              <textarea
                className="input"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows={4}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
              onClick={() => setEditingCommunity(null)} 
              style={{ 
                padding: '10px 20px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
                }}>
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

      {/* Modal de edición de ronda */}
      {editingRound && (
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
          zIndex: 1000,
          overflow: 'auto',
          padding: '20px'
        }}>
          <div className="modal" style={{ maxHeight: '90vh', overflow: 'auto' }}>
            <h3>Editar Ronda</h3>
            <div style={{ marginBottom: '15px' }}>
              <label className="label">Nombre:</label>
              <input
                type="text"
                className="input"
                value={editRoundName}
                onChange={(e) => setEditRoundName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label className="label">Fecha límite:</label>
              <input
                type="datetime-local"
                className="input"
                value={editRoundDeadline}
                onChange={(e) => setEditRoundDeadline(e.target.value)}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h4>Partidos ({editRoundMatches.length})</h4>
              {editRoundMatches.map((match, index) => (
                <div key={index} style={{ 
                  marginBottom: '15px', 
                  padding: '15px', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '4px'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <label className="label">Equipo Local:</label>
                    <input
                      type="text"
                      className="input"
                      value={match.homeTeam}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].homeTeam = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label className="label">Equipo Visitante:</label>
                    <input
                      type="text"
                      className="input"
                      value={match.awayTeam}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].awayTeam = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    />
                  </div>
                  <div>
                    <label className="label">Tipo de Apuesta:</label>
                    <select
                      className="input"
                      value={match.type}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].type = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    >
                      <option value="exact">Resultado Exacto</option>
                      <option value="1X2">1 X 2</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setEditingRound(null)} 
                style={{ 
                  padding: '10px 20px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveRound}
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
              className="card"
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                opacity: selectedCommunity === community.id ? 1 : 0.85
              }}
            >
              <h3 style={{ marginTop: 0 }}>{community.name}</h3>
              {community.description && (
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  {community.description}
                </p>
              )}
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Creada: {formatDate(community.createdAt)}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '15px' }}>
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
                  className="card"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '15px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{round.name}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                        <strong>Estado:</strong> {
                          round.status === 'open' ? '🟢 Abierta' :
                          round.status === 'closed' ? '🔴 Cerrada' :
                          '✅ Resultados Publicados'
                        }
                      </p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                        <strong>Fecha límite:</strong> {formatDate(round.deadline)}
                      </p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                        <strong>Creada:</strong> {formatDate(round.createdAt)}
                      </p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Partidos:</strong> {round.matches.length}
                      </p>
                      {round.status === 'results_posted' && round.winnerNick && (
                        <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#4CAF50' }}>
                          🏆 Ganador: {round.winnerNick}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => navigate(`/community/${round.communityId}/round/${round.id}/results`)}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto'
                        }}
                      >
                        Editar Resultados
                      </button>
                      <button
                        onClick={() => handleEditRound(round)}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: '#2196F3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto'
                        }}
                      >
                        Editar Ronda
                      </button>
                      <button
                        onClick={() => handleDeleteRound(round)}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto'
                        }}
                      >
                        Eliminar Ronda
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Alerta personalizada */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}

      {/* Confirmación personalizada */}
      {confirmDialog && (
        <CustomConfirm
          message={confirmDialog.message}
          confirmText="Eliminar"
          cancelText="Cancelar"
          onConfirm={confirmDialog.onConfirm}
          onCancel={() => setConfirmDialog(null)}
        />
      )}

      {/* Alerta personalizada */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}
      </div>
    </div>
  );
};

export default SuperAdminPanel;
