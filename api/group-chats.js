class GroupChatsApi {
    constructor(request, token) {
        this.request = request;
        this.token = token;
    }

    async getGroupChats() {
        return await this.request.get('/api/v2/Conversation', {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                DeviceId: process.env.DeviceId 
            }
        });
    }
}

module.exports = { GroupChatsApi };