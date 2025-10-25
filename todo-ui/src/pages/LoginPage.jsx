// import React from 'react';
// import { useKeycloak } from '@react-keycloak/web';
// import '../style/LoginPage.scss';

// const LoginPage = () => {
//   const { keycloak, initialized } = useKeycloak();

//   if (!initialized) return <div>Loading...</div>;

//   if (keycloak.authenticated) {
//     window.location.href = '/tasks';
//     return null;
//   }

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h2>Please Login or Register</h2>
//         <button className="btn login" onClick={() => keycloak.login()}>Login</button>
//         <button className="btn register" onClick={() => keycloak.register()}>Register</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
