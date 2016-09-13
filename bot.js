'use_strict'

var TelegramBot = require('node-telegram-bot-api');
var Twit = require('twit');

var token = '297506915:AAHtbyoBvbac30tYPZM9iRtKEgQkQSJrCac';
var bot = new TelegramBot(token, {polling: true});

var Tweety = new Twit({
  consumer_key:         '1b4u7a1E4w4jP19qeBSnezxuh',
  consumer_secret:      '6fre5jmmFPmeW1E3QM1tN3TeZ7ATwGfdMiaue0uhaQApiItcah',
  access_token:         '1922906005-e7kg16yun2IMgSM9vwYInH5Akcco3UB34tv775t',
  access_token_secret:  'xDoo2AAB7EqU0mtNqBzZr2xk3XaEc1YH3AdCFUhiabCJC'
})

var stream = Tweety.stream('statuses/filter', { follow: ['294025417'] });

stream.on('tweet', function (tweet) {
    if (!tweet.retweeted_status && !tweet.quoted_status) {
      bot.sendMessage('-117044569', tweet.text);
    }
})

stream.on('error', function (error){
    console.log(error.message);
})