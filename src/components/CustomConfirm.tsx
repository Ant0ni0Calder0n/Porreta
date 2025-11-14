import React from 'react';

interface CustomConfirmProps {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const CustomConfirm: React.FC<CustomConfirmProps> = ({ 
  title = 'Porreta APP', 
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel
}) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onCancel}>
      <div 
        className="modal" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '400px',
          animation: 'scaleIn 0.3s ease-out'
        }}
      >
        <div style={{ 
          textAlign: 'center',
          borderBottom: '3px solid #f44336',
          paddingBottom: '15px',
          marginBottom: '20px'
        }}>
          <h2 style={{ 
            margin: 0,
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            ⚠️ {title}
          </h2>
        </div>
        
        <p style={{ 
          color: 'var(--text-primary)',
          lineHeight: '1.6',
          textAlign: 'center',
          margin: '20px 0',
          whiteSpace: 'pre-line'
        }}>
          {message}
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '10px',
          marginTop: '20px'
        }}>
          <button 
            onClick={onCancel}
            className="button button-secondary"
            style={{ 
              flex: 1
            }}
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className="button"
            style={{ 
              flex: 1,
              backgroundColor: '#f44336'
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomConfirm;
