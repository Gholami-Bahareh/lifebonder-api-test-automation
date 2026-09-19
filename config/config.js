require('dotenv').config();

const config = {
    baseURL: process.env.BASE_URL,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    clientId: process.env.CLIENT_ID,
    grantType: process.env.GRANT_TYPE
};

module.exports = { config };