const { expect } = require('@playwright/test');
const { test } = require('../fixtures/api-fixtures');

test('Get user group chats', async ({ groupChatsApi }) => {
    const response = await groupChatsApi.getGroupChats();

    expect(response.status()).toBe(200);
});