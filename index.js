const db = require('./database').database;

const telegramBot = require('node-telegram-bot-api');
//Your bot token can go here or you can use a .env file to save it
const token = '758994901:AAHRPitHsb-u954nfEqomz5qMMRpFBr9Ocg';

//Initialize bot
const bot = new telegramBot (token, {polling:true});
//variable to save the reminder
let reminder;

//Event listener for start
bot.onText(/\/start/,(msg,match)=>{
    bot.sendMessage(
      msg.chat.id,
      `Hello! ${msg.chat.first_name},
       What do you want to be reminded of? [Start next message with /save]`
    )
    .then(res => {
         //for save
        })
        .catch(e => {
            bot.sendMessage(msg.chat.id,`Oops! An error has occured. Try again`);
        })
});
