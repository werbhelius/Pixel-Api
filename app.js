const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/x-www-form-urlencoded")
  next()
})

app.use('/oauth2/access_token', require('./router/oauth_login'))

app.use('/statuses/home_timeline.json', require('./router/home_timeline'))

app.use('/statuses/public_timeline.json', require('./router/public_timeline'))

app.use('/users/show.json', require('./router/userInfo'))

app.use('/statuses/user_timeline.json', require('./router/my_content'))

app.use('/comments/show.json', require('./router/content_comments'))

app.use('/statuses/update.json', require('./router/send_text'))

app.use('/statuses/upload.json', require('./router/send_image'))

app.use('/statuses/mentions.json', require('./router/at_me_statuses'))

app.use('/comments/mentions.json', require('./router/at_me_comments'))

app.use('/comments/to_me.json', require('./router/receive_comment'))

app.use('/comments/by_me.json', require('./router/send_comment'))

app.use('/friendships/followers.json', require('./router/my_follower'))

app.use('/friendships/friends.json', require('./router/my_friend'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server running @${port}`);
})