import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import keycloak from './keycloak';
import TaskPage from './pages/TaskPage';
import Loader from './components/Loader';

const PrivateRoute = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return <Loader />; 

  if (!keycloak.authenticated) {
    keycloak.login();
    return <Loader />;
  }

  return children;
};

const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{ onLoad: 'check-sso', checkLoginIframe: false }}
    >
      <BrowserRouter>
        <Routes>
          <Route 
            path="/tasks" 
            element={
              <PrivateRoute>
                <TaskPage />
              </PrivateRoute>
            } 
          />
          {/* Redirect any unknown route to /tasks */}
          <Route path="*" element={<Navigate to="/tasks" replace />} />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
