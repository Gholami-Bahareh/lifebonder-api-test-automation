
require('dotenv').config();

async function login(request) {
    const response = await request.post('/connect/token', {
        form: {
            userName: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
            client_id: process.env.CLIENT_ID,
            client_secret: '',
            grant_type: process.env.GRANT_TYPE
        }
    });

    const responseBody = await response.json();

    return responseBody.access_token;
}


module.exports = { login };