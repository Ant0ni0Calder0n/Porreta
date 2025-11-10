import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nick, setNick] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, currentUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirigir automáticamente si ya está autenticado
  useEffect(() => {
    if (!authLoading && currentUser) {
      navigate('/communities');
    }
  }, [currentUser, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !nick) {
      setError('Completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await signup(email, password, nick);
      navigate('/communities');
    } catch (err: any) {
      setError('Error al crear cuenta: ' + (err.message || 'Error desconocido'));
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
      <div className="card" style={{ marginTop: '40px' }}>
        <h1 style={{ textAlign: 'center', color: '#1976d2', marginTop: 0 }}>Porreta</h1>
        <h2 style={{ textAlign: 'center', marginTop: 0, fontSize: '18px', color: '#666' }}>
          Crear Cuenta
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">Nick / Apodo</label>
            <input
              type="text"
              className="input"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              placeholder="Tu apodo"
              disabled={loading}
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
              disabled={loading}
            />
          </div>

          <div>
            <label className="label">Confirmar Contraseña</label>
            <input
              type="password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repite la contraseña"
              disabled={loading}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Cuenta'}
          </button>

          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate('/')}
            disabled={loading}
          >
            Ya tengo cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
