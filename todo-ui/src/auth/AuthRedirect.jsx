import React, { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const AuthRedirect = () => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized && !keycloak.authenticated) {
      keycloak.login(); // Redirects directly to Keycloak login page
    }
  }, [initialized, keycloak]);

  if (!initialized || !keycloak.authenticated) {
    return <div>Redirecting to login...</div>; // optional loading screen
  }

  // User is authenticated, redirect to your app
  window.location.href = '/tasks';
  return null;
};

export default AuthRedirect;
