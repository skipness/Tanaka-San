'use strict'

var TelegramBot = require('node-telegram-bot-api');
var Twit = require('twit');

var token = '...'; //your telegram bot api token
var bot = new TelegramBot(token, {polling: true});

var Tweety = new Twit({
  consumer_key:         '...', //your twitter consumer key
  consumer_secret:      '...', //your twitter consumer secret
  access_token:         '...', //your twitter access token
  access_token_secret:  '...' //your twitter access token secret
})

var stream = Tweety.stream('statuses/filter', { follow: ['294025417'] });

stream.on('tweet', function (tweet) {
    if (!tweet.retweeted_status && !tweet.quoted_status && !tweet.in_reply_to_user_id) {
      bot.sendMessage('...', tweet.text); // chat id
    }
})

stream.on('error', function (error){
    console.log(error.message);
})
