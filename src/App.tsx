import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

const Login = React.lazy(() => import('./components/Login'));
const Signup = React.lazy(() => import('./components/Signup'));
const Communities = React.lazy(() => import('./components/Communities'));
const CommunityDashboard = React.lazy(() => import('./components/CommunityDashboard'));
const CreateRound = React.lazy(() => import('./components/CreateRound'));
const RoundDetail = React.lazy(() => import('./components/RoundDetail'));
const CreateBet = React.lazy(() => import('./components/CreateBet'));
const PublishResults = React.lazy(() => import('./components/PublishResults'));
const SuperAdminPanel = React.lazy(() => import('./components/SuperAdminPanel'));
const NotificationSettings = React.lazy(() => import('./components/NotificationSettings'));

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return currentUser ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <ThemeProvider>
        <AuthProvider>
          <BrowserRouter basename="/Porreta">
          <Suspense fallback={<div className="loading">Cargando...</div>}>
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
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <NotificationSettings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/super-admin"
                element={
                  <ProtectedRoute>
                    <SuperAdminPanel />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
