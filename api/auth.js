
const { config } = require('../config/config');

async function login(request) {
    const response = await request.post('/connect/token', {
        form: {
            userName: config.username,
            password: config.password,
            client_id: config.clientId,
            client_secret: '',
            grant_type: config.grantType
        }
    });

    const responseBody = await response.json();

    return responseBody.access_token;
}


module.exports = { login };