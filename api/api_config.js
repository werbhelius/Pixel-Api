
const host_config = {
    host: 'api.weibo.com',
}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    home_timeline: '/2/statuses/home_timeline.json',
    public_timeline: '/2/statuses/public_timeline.json',
    userInfo: '/2/users/show.json',
    myContent: '/2/statuses/user_timeline.json',
    content_comments: '/2/comments/show.json',
    send_text: '/2/statuses/update.json',
    send_image: '/2/statuses/upload.json',
    at_me_status: '/2/statuses/mentions.json',
    at_me_comments: '/2/comments/mentions.json',
    receive_comment: '/2/comments/to_me.json',
    send_comment: '/2/comments/by_me.json',
    my_follower: '/2/friendships/followers.json',
    my_friend: '/2/friendships/friends.json'
}

const ApiConfig = {
    HOST_CONCIG: host_config,
    API_ROUTER_CONFIG: api_router_config
}

module.exports = ApiConfig