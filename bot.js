'use strict';

const config = require('./config');

const TelegramBot = require('node-telegram-bot-api');
const Twit = require('twit');

const telegram_bot = new TelegramBot(config.telegram.token, {polling: true});

const Tweety = new Twit(config.twitter.credential);

const stream = Tweety.stream('statuses/filter', {follow: config.twitter.following});

stream.on('tweet', function (tweet) {
	if (!tweet.retweeted_status && !tweet.quoted_status && !tweet.in_reply_to_user_id) {
		telegram_bot.sendMessage(config.telegram.chat_id, tweet.text); // chat id
	}
});

stream.on('error', function (error) {
	console.log(error.message);
});
