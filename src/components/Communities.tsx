import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { db } from '../firebaseDb';
import { Community, GlobalConfig } from '../types';
import CustomAlert from './CustomAlert';
import InstallAppPrompt from './InstallAppPrompt';

const Communities: React.FC = () => {
  const { userData, logout, isSuperAdmin, changePassword } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [communityCreationDisabled, setCommunityCreationDisabled] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{ message: string; type: 'info' | 'warning' | 'error' | 'success' } | null>(null);

  useEffect(() => {
    loadCommunities();
    checkCommunityCreationStatus();
  }, [userData]);

  useEffect(() => {
    if (!showSettingsMenu) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target as Node)) {
        setShowSettingsMenu(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [showSettingsMenu]);

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
          const community = { id: doc.id, ...doc.data() } as Community;
          if (isSuperAdmin || community.isActive !== false) {
            communitiesData.push(community);
          }
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

  const headerButtonStyle: React.CSSProperties = {
    width: '38px',
    height: '38px',
    minWidth: '38px',
    padding: 0,
    border: '1px solid rgba(255,255,255,0.75)',
    borderRadius: '6px',
    backgroundColor: 'rgba(255,255,255,0.18)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '17px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Mis Comunidades</h1>
        <div ref={settingsMenuRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setShowSettingsMenu(!showSettingsMenu)}
            style={headerButtonStyle}
            title="Ajustes"
          >
            ⚙️
          </button>
          {showSettingsMenu && (
            <div style={{
              position: 'absolute',
              top: '46px',
              right: 0,
              zIndex: 20,
              minWidth: '220px',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
              border: '1px solid var(--border-color)'
            }}>
              {isSuperAdmin && (
                <SettingsMenuButton label="🔧 Superadmin" onClick={() => { setShowSettingsMenu(false); navigate('/super-admin'); }} />
              )}
              <SettingsMenuButton label="🔔 Notificaciones" onClick={() => { setShowSettingsMenu(false); navigate('/notifications'); }} />
              <SettingsMenuButton label={theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'} onClick={() => { setShowSettingsMenu(false); toggleTheme(); }} />
              <SettingsMenuButton label="🔑 Cambiar contraseña" onClick={() => { setShowSettingsMenu(false); setShowPasswordModal(true); }} />
              <SettingsMenuButton label="🚪 Salir" onClick={() => { setShowSettingsMenu(false); handleLogout(); }} />
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <InstallAppPrompt />

        <div className="card">
          <button 
            className="button" 
            onClick={() => {
              if (communityCreationDisabled) {
                setAlertMessage({ 
                  message: 'La creación de nuevas comunidades está temporalmente deshabilitada por el administrador', 
                  type: 'warning' 
                });
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
                <h3 style={{ margin: '0 0 8px 0' }}>
                  {community.name}
                  {community.isActive === false && (
                    <span className="badge badge-closed" style={{ marginLeft: '8px' }}>Desactivada</span>
                  )}
                </h3>
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

      {showPasswordModal && (
        <ChangePasswordModal
          onClose={() => setShowPasswordModal(false)}
          onChangePassword={changePassword}
          onSuccess={() => setAlertMessage({ message: 'Contraseña actualizada correctamente', type: 'success' })}
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
  );
};

interface SettingsMenuButtonProps {
  label: string;
  onClick: () => void;
}

const SettingsMenuButton: React.FC<SettingsMenuButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      width: '100%',
      border: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      padding: '10px 12px',
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: '6px',
      fontSize: '14px'
    }}
  >
    {label}
  </button>
);

interface ChangePasswordModalProps {
  onClose: () => void;
  onChangePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  onSuccess: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ onClose, onChangePassword, onSuccess }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Completa todos los campos');
      return;
    }

    if (newPassword.length < 6) {
      setError('La nueva contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas nuevas no coinciden');
      return;
    }

    setSaving(true);
    setError('');

    try {
      await onChangePassword(currentPassword, newPassword);
      onSuccess();
      onClose();
    } catch (err: any) {
      const code = err?.code || '';
      if (code.includes('wrong-password') || code.includes('invalid-credential')) {
        setError('La contraseña actual no es correcta');
      } else if (code.includes('requires-recent-login')) {
        setError('Vuelve a iniciar sesión y prueba otra vez');
      } else {
        setError('Error al cambiar contraseña');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Cambiar contraseña</h2>
        <form onSubmit={handleSubmit}>
          <label className="label">Contraseña actual</label>
          <input
            type="password"
            className="input"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            disabled={saving}
          />

          <label className="label">Nueva contraseña</label>
          <input
            type="password"
            className="input"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            disabled={saving}
          />

          <label className="label">Repetir nueva contraseña</label>
          <input
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            disabled={saving}
          />

          {error && <div className="error">{error}</div>}

          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="submit" className="button" disabled={saving} style={{ flex: 1 }}>
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
            <button type="button" className="button button-secondary" onClick={onClose} disabled={saving} style={{ flex: 1 }}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
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
        isActive: true,
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

      if (community.isActive === false) {
        setError('Esta comunidad está desactivada temporalmente');
        setLoading(false);
        return;
      }

      // Verificar si el usuario ya es miembro
      if (userData.communities[communityDoc.id]) {
        setError('Ya eres miembro de esta comunidad');
        setLoading(false);
        return;
      }
      
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
