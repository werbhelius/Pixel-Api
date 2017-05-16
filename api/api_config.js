
const host_config = {
    host: 'api.weibo.com',
}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    home_timeline: '/2/statuses/home_timeline.json',
    userInfo: '/2/users/show.json',
}

const ApiConfig = {
    HOST_CONCIG: host_config,
    API_ROUTER_CONFIG: api_router_config
}

module.exports = ApiConfig