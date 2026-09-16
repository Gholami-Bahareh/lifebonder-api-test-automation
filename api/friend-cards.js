class FriendCardsApi {
    constructor(request, token) {
        this.request = request;
        this.token = token;
    }

    async getFriendCards() {
        return await this.request.get('/api/v2/FriendCards/User/FriendCards', {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }
}

module.exports = { FriendCardsApi };