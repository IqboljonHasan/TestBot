const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');
const data =require('./data');

const TOKEN = '935041877:AAFV1chfNhVZ6GVSk-iC2OqgR904E8ipF_Y';

const telegram = new Telegram(TOKEN, {
    agent: null,
    webhookReply: true
});

const bot = new Telegraf(TOKEN);

console.log('Bot has been started...');

// bot.use(async (ctx, next) => {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     console.log(JSON.stringify((ctx.message), null, 4));
//     console.log('Response time: %sms', ms);
// });

bot.start((ctx) => ctx.reply('Assalomu alaykum\n\n XUSH KELIBSIZ 🙂\n\n\nTest yechishni xohlasangiz /boshlash ni bosing'));
let numOfElements = 5;

bot.command('boshlash', (ctx) => {
    let pageNum = 1;
    let begin = 0;

    return ctx.reply(
        `Mavzulardan birortasini tanlang:\n${ data.slice(begin, begin + 10).map(item => `\n${item.num}  ${item.theme}`) }`,
        data.length < 10
            ? Markup.inlineKeyboard([
                data.slice(numOfElements-5, numOfElements).map((item, index) => Markup.callbackButton(`${index}`, `${index}`)),
                data.slice(numOfElements, numOfElements+numOfElements).map((item, index) => Markup.callbackButton(`${index+numOfElements}`, `${index+numOfElements}`))
            ])
                .oneTime()
                .resize()
                .extra()
            : Markup.inlineKeyboard([
                pageNum === 1 ? [] : [Markup.callbackButton('Orqaga', 'prev')],
                data.slice(numOfElements-5, numOfElements).map(item => Markup.callbackButton(`${item.num}`, `${item.num}`)),
                data.slice(numOfElements, numOfElements+numOfElements).map(item => Markup.callbackButton(`${item.num}`, `${item.num}`)),
                [Markup.callbackButton('Keyingi', 'next')],
            ])
                .oneTime()
                .resize()
                .extra()
    )
});
bot.action('prev', (ctx) => {
    ctx.editMessageText(
        `Mavzulardan birortasini tanlang:\n${data.slice(0, 10).map(test => `\n${test.num}  ${test.theme}`)}`,
        Markup.inlineKeyboard([
            [Markup.callbackButton('Oraqga', 'prev')],
            data.slice(numOfElements*0, numOfElements*1).map(item => Markup.callbackButton(`${item.num}`, `${item.num}`)),
            data.slice(numOfElements*1, numOfElements*2).map(item => Markup.callbackButton(`${item.num}`, `${item.num}`)),
            [Markup.callbackButton('Keyingi', 'next')],
        ])
            .oneTime()
            .resize()
            .extra()
    ).catch(err => console.log(err))

});
bot.action('next', (ctx) => {
    ctx.editMessageText(
        `Mavzulardan birortasini tanlang:\n${data.slice(10, 15).map(test => `\n${test.num}  ${test.theme}`)}`,
        Markup.inlineKeyboard([
            [Markup.callbackButton('Oraqga', 'prev')],
            data.slice(numOfElements*2, numOfElements*3).map(item => Markup.callbackButton(`${item.num}`, `${item.num}`)),
            [Markup.callbackButton('Keyingi', 'next')],
        ])
            .oneTime()
            .resize()
            .extra()
    ).catch(err => (err))
});

data.map(test => {
    bot.action(`${test.num}`, ctx => {
        ctx.reply(`${test.tests.map(q => q.question)}`,
            Markup.inlineKeyboard([
                [Markup.callbackButton('A', 'a')],
                [Markup.callbackButton('B', 'b')],
            ])
        ).then()
    })
});


bot.launch().catch(err => console.log(err));

//data.map((item, index) => Markup.callbackButton(`${index}`, `${index}`))
// [1, 2, 3, 4, 5].map((index,item) => Markup.callbackButton(`${index}`, `${item}`))
