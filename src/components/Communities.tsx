import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Community, GlobalConfig } from '../types';

const Communities: React.FC = () => {
  const { userData, logout, isSuperAdmin } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [communityCreationDisabled, setCommunityCreationDisabled] = useState(false);

  useEffect(() => {
    loadCommunities();
    checkCommunityCreationStatus();
  }, [userData]);

  const checkCommunityCreationStatus = async () => {
    try {
      const configDoc = await getDoc(doc(db, 'config', 'global'));
      if (configDoc.exists()) {
        const config = configDoc.data() as GlobalConfig;
        setCommunityCreationDisabled(!config.allowCommunityCreation);
      }
    } catch (error) {
      console.error('Error al verificar configuración:', error);
    }
  };

  const loadCommunities = async () => {
    if (!userData) return;
    
    try {
      const communityIds = Object.keys(userData.communities || {});
      if (communityIds.length === 0) {
        setCommunities([]);
        setLoading(false);
        return;
      }

      const communitiesData: Community[] = [];
      for (const id of communityIds) {
        const communityDoc = await getDocs(query(collection(db, 'communities'), where('__name__', '==', id)));
        communityDoc.forEach((doc) => {
          communitiesData.push({ id: doc.id, ...doc.data() } as Community);
        });
      }
      setCommunities(communitiesData);
    } catch (error) {
      console.error('Error cargando comunidades:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Mis Comunidades</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {isSuperAdmin && (
            <button 
              onClick={() => navigate('/super-admin')}
              style={{
                backgroundColor: '#607D8B',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                opacity: 0.85
              }}
            >
              🔧
            </button>
          )}
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '10px 16px',
              border: '1px solid white',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={handleLogout}>Salir</button>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <button 
            className="button" 
            onClick={() => {
              if (communityCreationDisabled) {
                alert('La creación de nuevas comunidades está temporalmente deshabilitada por el administrador');
              } else {
                setShowCreateModal(true);
              }
            }}
            style={{ 
              opacity: communityCreationDisabled ? 0.6 : 1,
              cursor: communityCreationDisabled ? 'not-allowed' : 'pointer'
            }}
          >
            Crear Nueva Comunidad
          </button>
          <button className="button button-secondary" onClick={() => setShowJoinModal(true)}>
            Unirse a Comunidad
          </button>
        </div>

        {communities.length === 0 ? (
          <div className="empty-state">
            <p>No perteneces a ninguna comunidad aún</p>
            <p>Crea una nueva o únete usando una contraseña</p>
          </div>
        ) : (
          <div className="card">
            {communities.map((community) => (
              <div
                key={community.id}
                className="list-item"
                onClick={() => navigate(`/community/${community.id}`)}
              >
                <h3 style={{ margin: '0 0 8px 0' }}>{community.name}</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {community.membersCount} miembros
                  {userData?.communities[community.id] === 'admin' && (
                    <span className="badge badge-admin">Admin</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {showCreateModal && (
        <CreateCommunityModal
          onClose={() => setShowCreateModal(false)}
          onCreated={loadCommunities}
        />
      )}

      {showJoinModal && (
        <JoinCommunityModal
          onClose={() => setShowJoinModal(false)}
          onJoined={loadCommunities}
        />
      )}
    </div>
  );
};

interface CreateCommunityModalProps {
  onClose: () => void;
  onCreated: () => void;
}

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ onClose, onCreated }) => {
  const { currentUser, userData, refreshUserData } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !password) {
      setError('Completa todos los campos');
      return;
    }

    if (!currentUser || !userData) return;

    setError('');
    setLoading(true);

    try {
      // Hash simple de contraseña (en producción usar bcrypt en Cloud Function)
      const passwordHash = btoa(password);

      const communityRef = await addDoc(collection(db, 'communities'), {
        name,
        passwordHash,
        createdBy: currentUser.uid,
        createdAt: new Date(),
        membersCount: 1
      });

      // Añadir comunidad al usuario como admin
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        [`communities.${communityRef.id}`]: 'admin'
      });

      await refreshUserData();
      onCreated();
      onClose();
    } catch (err: any) {
      setError('Error creando comunidad: ' + (err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Crear Nueva Comunidad</h2>
        <form onSubmit={handleCreate}>
          <div>
            <label className="label">Nombre de la Comunidad</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Amigos del Bar"
              disabled={loading}
            />
          </div>

          <div>
            <label className="label">Contraseña (para que otros se unan)</label>
            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña de acceso"
              disabled={loading}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Comunidad'}
          </button>
          <button type="button" className="button button-secondary" onClick={onClose} disabled={loading}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

interface JoinCommunityModalProps {
  onClose: () => void;
  onJoined: () => void;
}

const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({ onClose, onJoined }) => {
  const { currentUser, userData, refreshUserData } = useAuth();
  const [communityName, setCommunityName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!communityName || !password) {
      setError('Completa todos los campos');
      return;
    }

    if (!currentUser || !userData) return;

    setError('');
    setLoading(true);

    try {
      // Buscar comunidad por nombre
      const q = query(collection(db, 'communities'), where('name', '==', communityName));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('No se encontró la comunidad');
        setLoading(false);
        return;
      }

      const communityDoc = querySnapshot.docs[0];
      const community = communityDoc.data() as Community;

      // Verificar contraseña (hash simple)
      const passwordHash = btoa(password);
      if (community.passwordHash !== passwordHash) {
        setError('Contraseña incorrecta');
        setLoading(false);
        return;
      }

      // Añadir usuario a la comunidad
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        [`communities.${communityDoc.id}`]: 'member'
      });

      // Incrementar contador de miembros
      const communityRef = doc(db, 'communities', communityDoc.id);
      await updateDoc(communityRef, {
        membersCount: increment(1)
      });

      await refreshUserData();
      onJoined();
      onClose();
    } catch (err: any) {
      setError('Error uniéndose a comunidad: ' + (err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Unirse a Comunidad</h2>
        <form onSubmit={handleJoin}>
          <div>
            <label className="label">Nombre de la Comunidad</label>
            <input
              type="text"
              className="input"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              placeholder="Nombre exacto"
              disabled={loading}
            />
          </div>

          <div>
            <label className="label">Contraseña</label>
            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña de acceso"
              disabled={loading}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Uniéndose...' : 'Unirse'}
          </button>
          <button type="button" className="button button-secondary" onClick={onClose} disabled={loading}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Communities;
