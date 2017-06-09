# Pixel-Api

* 为解决 Vue 微博客户端 [Pixel-Web](https://github.com/Werb/Pixel-Web) 跨域问题写的 Node 服务器
* Github项目地址：[https://github.com/Werb/Pixel-Api](https://github.com/Werb/Pixel-Api)
* 欢迎关注我的微博：[wanbo-](http://weibo.com/singerwannber)

## Server
* 使用 Nodejs + Express 开发
* 实现 Oauth登录，查看最新微博，查看单条微博评论，个人主页，我的关注，我的粉丝，发微博以及四种消息（@我的微博，@我的评论，收到的评论，发出的评论）
* 后续接口我会继续开发，同时欢迎 Pull Request！

## Run

`npm install`
`node app.js`


## Api

### access_token
[POST /oauth2/access_token](./router/oauth_login.js)  获取 Oauth2 token

### weibos
[GET /statuses/home_timeline.json](./router/home_timeline.js)  获取当前登录用户及其所关注用户的最新微博

[GET /statuses/public_timeline.json](./router/public_timeline.js)  获取最新的公共微博

[GET /statuses/user_timeline.json](./router/my_content.js)  获取用户发布的微博

### users
[GET /users/show.json](./router/userInfo.js)  获取用户信息

### comments
[GET /comments/show.json](./router/content_comments.js)  获取某条微博的评论列表

### send weibo
[POST /statuses/update.json](./router/send_text.js)  发布一条微博信息

[POST /statuses/upload.json](./router/send_image.js)  上传图片并发布一条微博

### notify
[GET /statuses/mentions.json](./router/at_me_statuses.js)  获取@当前用户的最新微博

[GET /comments/mentions.json](./router/at_me_comments.js)  获取@到我的评论

[GET /comments/to_me.json](./router/receive_comment.js) 我收到的评论列表

[GET /comments/by_me.json](./router/send_comment.js)  我发出的评论列表

### friendships
[GET /friendships/followers.json](./router/my_follower.js)  获取用户粉丝列表

[GET /friendships/friends.json](./router/my_friend.js)  获取用户的关注列表


## Issue
* [POST /statuses/upload.json](./router/send_image.js)  上传图片并发布一条微博 该接口调用不成功，总是返回 
``` {"error":"auth by Null spi!","error_code":21301,"request":"/2/statuses/upload.json"} ``` 不知道是微博接口的限制还是我这边上传出错，有知道的同学希望可以帮助我一下

## LICENSE
[Apache License](./LICENSE)

