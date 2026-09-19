const { expect } = require('@playwright/test');
const { test } = require('../fixtures/api-fixtures');

test('Get user friend cards', async ({ friendCardsApi }) => {
    const response = await friendCardsApi.getFriendCards();

    expect(response.status()).toBe(200);
});