import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirigir automáticamente si ya está autenticado
  useEffect(() => {
    if (!authLoading && currentUser) {
      navigate('/communities');
    }
  }, [currentUser, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/communities');
    } catch (err: any) {
      setError('Error al iniciar sesión: ' + (err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  // Mostrar pantalla de carga mientras verifica autenticación
  if (authLoading) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card" style={{ marginTop: '60px' }}>
        <h1 style={{ textAlign: 'center', color: '#1976d2', marginTop: 0 }}>Porreta</h1>
        <h2 style={{ textAlign: 'center', marginTop: 0, fontSize: '18px', color: '#666' }}>
          Iniciar Sesión
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">Correo electrónico</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              disabled={loading}
            />
          </div>

          <div>
            <label className="label">Contraseña</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              disabled={loading}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>

          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate('/signup')}
            disabled={loading}
          >
            Crear Cuenta Nueva
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
