const { expect } = require('@playwright/test');
const { test } = require('../fixtures/api-fixtures');

test('Get user meetups', async ({ meetupsApi }) => {
    const response = await meetupsApi.getMeetups();

    expect(response.status()).toBe(200);
});