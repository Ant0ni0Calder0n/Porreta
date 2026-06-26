import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { NotificationSettings as NotificationSettingsType } from '../types';

const defaultSettings: NotificationSettingsType = {
  newRounds: true,
  deadlineReminders: true,
  resultsPublished: true,
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
      description: 'Avisarme si queda poco tiempo y todavía no he apostado.'
    },
    {
      key: 'resultsPublished',
      title: 'Resultados publicados',
      description: 'Avisarme cuando se publiquen resultados oficiales.'
    },
    {
      key: 'winnersAndBote',
      title: 'Ganador o bote',
      description: 'Avisarme cuando haya ganador, empate de ganadores o bote.'
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
