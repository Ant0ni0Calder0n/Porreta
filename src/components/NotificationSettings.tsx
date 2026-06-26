import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { NotificationSettings as NotificationSettingsType } from '../types';
import { hasNotificationPermission, requestNotificationPermission, sendTestNotification } from '../utils/notifications';

const defaultSettings: NotificationSettingsType = {
  newRounds: true,
  deadlineReminders: true,
  winnersAndBote: true
};

const NotificationSettings: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, userData, refreshUserData } = useAuth();
  const [settings, setSettings] = useState<NotificationSettingsType>({
    ...defaultSettings,
    ...(userData?.notificationSettings || {})
  });
  const [saving, setSaving] = useState(false);
  const [requestingPermission, setRequestingPermission] = useState(false);
  const [sendingTest, setSendingTest] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(hasNotificationPermission());
  const [statusMessage, setStatusMessage] = useState('');

  const updateSetting = async (field: keyof NotificationSettingsType, value: boolean) => {
    if (!currentUser) return;

    const nextSettings = { ...settings, [field]: value };
    setSettings(nextSettings);
    setSaving(true);

    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        notificationSettings: nextSettings
      });
      await refreshUserData();
      setStatusMessage('Preferencias guardadas');
    } catch (error) {
      console.error('Error guardando preferencias de notificación:', error);
      setSettings(settings);
      setStatusMessage('Error al guardar las preferencias');
    } finally {
      setSaving(false);
    }
  };

  const handleEnableNotifications = async () => {
    if (!currentUser) return;

    setRequestingPermission(true);
    setStatusMessage('');

    try {
      const enabled = await requestNotificationPermission(currentUser.uid);
      setPermissionGranted(enabled);
      setStatusMessage(enabled
        ? 'Notificaciones activadas en este dispositivo'
        : 'No se concedió permiso de notificaciones');
    } catch (error) {
      console.error('Error activando notificaciones:', error);
      setStatusMessage('Error al activar notificaciones');
    } finally {
      setRequestingPermission(false);
    }
  };

  const handleSendTest = async () => {
    setSendingTest(true);
    setStatusMessage('');

    try {
      const result = await sendTestNotification();
      setStatusMessage(result.successCount > 0
        ? 'Notificación de prueba enviada'
        : 'No se pudo enviar la prueba. Activa las notificaciones primero.');
    } catch (error) {
      console.error('Error enviando notificación de prueba:', error);
      setStatusMessage('Error al enviar la notificación de prueba');
    } finally {
      setSendingTest(false);
    }
  };

  const options: Array<{
    key: keyof NotificationSettingsType;
    title: string;
    description: string;
  }> = [
    {
      key: 'newRounds',
      title: 'Nuevas rondas',
      description: 'Avisarme cuando haya una ronda visible para apostar.'
    },
    {
      key: 'deadlineReminders',
      title: 'Recordatorios antes del cierre',
      description: 'Avisarme cada 2 horas el día del cierre si son más de las 10:00 y todavía no he apostado.'
    },
    {
      key: 'winnersAndBote',
      title: 'Ganador o bote',
      description: 'Avisarme cuando haya ganador o bote.'
    }
  ];

  return (
    <div>
      <div className="header">
        <h1>Notificaciones</h1>
        <button onClick={() => navigate('/communities')}>Volver</button>
      </div>

      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Preferencias</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: 0 }}>
            Configura qué avisos quieres recibir en este dispositivo y usuario.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <button
              type="button"
              className="button"
              onClick={handleEnableNotifications}
              disabled={requestingPermission}
              style={{ width: 'auto', padding: '10px 14px', margin: 0 }}
            >
              {requestingPermission ? 'Activando...' : permissionGranted ? 'Reactivar notificaciones' : 'Activar notificaciones'}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={handleSendTest}
              disabled={sendingTest || !permissionGranted}
              style={{ width: 'auto', padding: '10px 14px', margin: 0 }}
            >
              {sendingTest ? 'Enviando...' : 'Enviar prueba'}
            </button>
          </div>

          {!permissionGranted && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '-6px' }}>
              El navegador todavía no tiene permiso para mostrar notificaciones en este dispositivo.
            </p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {options.map(option => (
              <label
                key={option.key}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: saving ? 'wait' : 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={settings[option.key]}
                  disabled={saving}
                  onChange={(event) => updateSetting(option.key, event.target.checked)}
                  style={{ width: '20px', height: '20px', marginTop: '2px' }}
                />
                <span style={{ flex: 1 }}>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>{option.title}</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{option.description}</span>
                </span>
              </label>
            ))}
          </div>

          {statusMessage && (
            <p style={{ margin: '14px 0 0 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
              {saving ? 'Guardando...' : statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
