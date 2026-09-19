const { test: base } = require('@playwright/test');
const { login } = require('../api/auth');
const { FriendCardsApi } = require('../api/friend-cards');
const { MeetupsApi } = require('../api/meetups');
const { GroupChatsApi } = require('../api/group-chats');

const test = base.extend({
    friendCardsApi: async ({ request }, use) => {
        const token = await login(request);
        const friendCardsApi = new FriendCardsApi(request, token);

        await use(friendCardsApi);
    },

    meetupsApi: async ({ request }, use) => {
        const token = await login(request);
        const meetupsApi = new MeetupsApi(request, token);

        await use(meetupsApi);
    },

    groupChatsApi: async ({ request }, use) => {
        const token = await login(request);
        const groupChatsApi = new GroupChatsApi(request, token);

        await use(groupChatsApi);
    }
});

module.exports = { test };