const { test, expect } = require('@playwright/test');
const { login } = require('../api/auth');

test('Get user friend cards', async ({ request }) => {
    const token = await login();

    const response = await request.get('/api/v2/FriendCards/User/FriendCards', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);
});