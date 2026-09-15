const { request } = require('@playwright/test');
require('dotenv').config();

async function login() {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL
    });

    const response = await apiContext.post('/connect/token', {
        form: {
            userName: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
            client_id: process.env.CLIENT_ID,
            client_secret: '',
            grant_type: process.env.GRANT_TYPE
        }
    });

    console.log('Status:', response.status());

    const responseBody = await response.json();
    console.log(responseBody);

    await apiContext.dispose();

    return responseBody.access_token;
}

module.exports = { login };