'use_strict'

var TelegramBot = require('node-telegram-bot-api');
var Twit = require('twit');

var token = '...';
var bot = new TelegramBot(token, {polling: true});

var Tweety = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...'
})

var stream = Tweety.stream('statuses/filter', { follow: ['294025417'] });

stream.on('tweet', function (tweet) {
    if (!tweet.retweeted_status && !tweet.quoted_status) {
      bot.sendMessage('...', tweet.text); 
    }
})

stream.on('error', function (error){
    console.log(error.message);
})
