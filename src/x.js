const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
const Tests =require('./data');

const X_TOKEN = '781717445:AAHfyV2G4Nd4TQD_L7QDKIOhsnClLAeHmCA'

const telegram = new Telegram(X_TOKEN, {
    agent: null,
    webhookReply: true
});

const bot = new Telegraf(X_TOKEN);

console.log('Bot has been started...');

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(JSON.stringify((ctx.message), null, 4));
    console.log('Response time: %sms', ms);
});

bot.start((ctx) => ctx.reply('Assalomu alaykum\n\n XUSH KELIBSIZ 🙂'));



let adminId = '822169271';
bot.on('message', ctx => {
    let msg_id = ctx.message.message_id, chat_id = ctx.message.chat.id;
    ctx.telegram.forwardMessage(adminId, chat_id, msg_id, Markup.inlineKeyboard([Markup.callbackButton('Reply', 'reply')])
        .oneTime()
        .resize()
        .extra()

    ).then(() => console.log('Forwarded'))

});

bot.launch();