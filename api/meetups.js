class MeetupsApi {
    constructor(request, token) {
        this.request = request;
        this.token = token;
    }

    async getMeetups() {
        return await this.request.get('/api/User/Activity/MyMeetUps', {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }
}

module.exports = { MeetupsApi };