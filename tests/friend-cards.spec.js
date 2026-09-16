const { test, expect } = require('@playwright/test');
const { login } = require('../api/auth');
const {FriendCardsApi} = require('../api/friend-cards');

test('Get user friend cards', async ({ request }) => {
    const token = await login();

    const friendCardsApi = new FriendCardsApi(request, token);

    const response = await friendCardsApi.getFriendCards();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);
});