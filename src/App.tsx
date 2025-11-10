import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Communities from './components/Communities';
import CommunityDashboard from './components/CommunityDashboard';
import CreateRound from './components/CreateRound';
import RoundDetail from './components/RoundDetail';
import CreateBet from './components/CreateBet';
import PublishResults from './components/PublishResults';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return currentUser ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/Porreta">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/communities"
            element={
              <ProtectedRoute>
                <Communities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/:communityId"
            element={
              <ProtectedRoute>
                <CommunityDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/:communityId/create-round"
            element={
              <ProtectedRoute>
                <CreateRound />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/:communityId/round/:roundId"
            element={
              <ProtectedRoute>
                <RoundDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/:communityId/round/:roundId/bet"
            element={
              <ProtectedRoute>
                <CreateBet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/:communityId/round/:roundId/results"
            element={
              <ProtectedRoute>
                <PublishResults />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
