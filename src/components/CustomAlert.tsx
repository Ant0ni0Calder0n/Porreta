import React from 'react';

interface CustomAlertProps {
  title?: string;
  message: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ 
  title = 'Porreta APP', 
  message, 
  type = 'info',
  onClose 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  const getColor = () => {
    switch (type) {
      case 'warning': return '#ff9800';
      case 'error': return '#f44336';
      case 'success': return '#4caf50';
      default: return '#2196f3';
    }
  };

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
      zIndex: 1000,
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      <div 
        className="modal" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '500px',
          maxHeight: '80vh',
          overflowY: 'auto',
          animation: 'scaleIn 0.3s ease-out'
        }}
      >
        <div style={{ 
          textAlign: 'center',
          borderBottom: `3px solid ${getColor()}`,
          paddingBottom: '15px',
          marginBottom: '20px'
        }}>
          <h2 style={{ 
            margin: 0,
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            {getIcon()} {title}
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

        <button 
          onClick={onClose}
          className="button"
          style={{ 
            width: '100%',
            marginTop: '10px'
          }}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
