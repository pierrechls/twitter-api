var Twitter = require('./twitter')
var express = require('express')
var app = express()

var port = process.env.NODE_ENV === "production" ? process.env.PORT : process.env.API_PORT
var url = process.env.NODE_ENV === "production" ? "localhost" : process.env.API_URL
var profile = process.env.TWITTER_USERNAME;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.get('/tweets', function (req, res) {
  var params = {
    profile: profile,
    tweet_mode: 'extended',
    count: 10
  }
  Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    res.send(tweets)
  })
})

app.listen(port, function () {
  console.log(`Listening at ${url}:${port}`)
})
