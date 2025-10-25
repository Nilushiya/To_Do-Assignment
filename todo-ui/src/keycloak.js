import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://keycloak:8080',
    realm: 'todo-realm',
    clientId: 'todo-frontend',         
});

export default keycloak;
