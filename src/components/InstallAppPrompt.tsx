import React, { useEffect, useState } from 'react';
import { getDevicePlatform, isInstalledApp } from '../utils/installPrompt';

const InstallAppPrompt: React.FC = () => {
  const [installed, setInstalled] = useState(isInstalledApp());
  const [expanded, setExpanded] = useState(false);
  const platform = getDevicePlatform();

  useEffect(() => {
    const handleInstalled = () => {
      setInstalled(true);
    };

    const updateInstalled = () => setInstalled(isInstalledApp());

    window.addEventListener('appinstalled', handleInstalled);
    window.addEventListener('focus', updateInstalled);

    return () => {
      window.removeEventListener('appinstalled', handleInstalled);
      window.removeEventListener('focus', updateInstalled);
    };
  }, []);

  if (installed || platform === 'other') return null;

  const isAndroid = platform === 'android';

  return (
    <div className="card" style={{ borderLeft: '4px solid #1976d2', padding: 0 }}>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          border: 0,
          background: 'transparent',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          fontSize: '18px',
          fontWeight: 700,
          textAlign: 'left'
        }}
      >
        <span>Instalar APP</span>
        <span aria-hidden="true" style={{ fontSize: '18px' }}>{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div style={{ padding: '0 20px 20px 20px' }}>
          {isAndroid ? (
            <>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: 0 }}>
                Para instalar Porreta en Android, usa Chrome.
              </p>
              <ol style={{ color: 'var(--text-secondary)', fontSize: '13px', paddingLeft: '18px', marginBottom: 0 }}>
                <li>Abre Porreta con Chrome.</li>
                <li>Pulsa el menú de los tres puntos de Chrome.</li>
                <li>Pulsa Instalar app o Añadir a pantalla de inicio.</li>
                <li>Abre Porreta desde el icono creado.</li>
              </ol>
            </>
          ) : (
            <>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: 0 }}>
                En iPhone, Porreta necesita abrirse desde la pantalla de inicio para poder activar notificaciones push.
              </p>
              <ol style={{ color: 'var(--text-secondary)', fontSize: '13px', paddingLeft: '18px', marginBottom: 0 }}>
                <li>Abre Porreta en Safari.</li>
                <li>Pulsa el botón Compartir.</li>
                <li>Elige Añadir a pantalla de inicio.</li>
                <li>Abre Porreta desde el icono creado.</li>
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default InstallAppPrompt;
