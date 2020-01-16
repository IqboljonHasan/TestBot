const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
// const Telegram = require('telegraf/telegram');
// const session = require('telegraf/session');
// const data = require('./data');
const fetch = require('cross-fetch');


const TOKEN = '935041877:AAFV1chfNhVZ6GVSk-iC2OqgR904E8ipF_Y';

const bot = new Telegraf(TOKEN);
// const telegram = new Telegram(TOKEN);
console.log('Bot has been started...');


// bot.use(session());
// bot.use(async (ctx, next) => {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     console.log(JSON.stringify((ctx.message), null, 4));
//     console.log('Response time: %sms', ms);
// });

bot.start((ctx) => {
    ctx.reply('Assalomu alaykum\n\n XUSH KELIBSIZ 🙂\n\n\nTest yechishni xohlasangiz /boshlash ni bosing');
});

let currentPage = 1;
let sumOfThemes = 0;


bot.command('boshlash', async (ctx) => {
    currentPage = 1;
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)

    }
    catch(err) {
        console.log(err)
    }
    // console.log(res.data);
    sumOfThemes = res.data.length;
    const numOfElements = sumOfThemes < 10 ? sumOfThemes : 10;
    return ctx.reply(
        `Mavzulardan birortasini tanlang:\n${ res.data.slice(numOfElements*(currentPage-1), numOfElements*currentPage).map((item, i) => `\n${i+1+(currentPage-1)*10}  ${item.theme}`) }`,
        sumOfThemes < 10
            ? Markup.inlineKeyboard([
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`))
            ]).oneTime().resize().extra()
            :  Markup.inlineKeyboard([
                currentPage === 1 ? [] : [Markup.callbackButton('Orqaga', 'prev')],
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`)),
                currentPage === Math.ceil(sumOfThemes/10) ? [] : [Markup.callbackButton('Keyingi', 'next')]
            ]).oneTime().resize().extra()
    )
});

bot.action('prev', async (ctx) => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)

    }
    catch(err) {
        console.log(err)
    }
    // console.log(res.data);
    sumOfThemes = res.data.length;
    const numOfElements = sumOfThemes < 10 ? sumOfThemes : 10;
    currentPage--;
    ctx.editMessageText(
        `Mavzulardan birortasini tanlang:\n${ res.data.slice(numOfElements*(currentPage-1), numOfElements*currentPage).map((item, i) => `\n${i+1+(currentPage-1)*10}  ${item.theme}`) }`,
        sumOfThemes < 10
            ? Markup.inlineKeyboard([
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`))
            ]).oneTime().resize().extra()
            :  Markup.inlineKeyboard([
                currentPage === 1 ? [] : [Markup.callbackButton('Orqaga', 'prev')],
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`)),
                currentPage === Math.ceil(sumOfThemes/10) ? [] : [Markup.callbackButton('Keyingi', 'next')]
            ]).oneTime().resize().extra()
    )
});
bot.action('next', async (ctx) => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)

    }
    catch(err) {
        console.log(err)
    }
    // console.log(res.data);
    sumOfThemes = res.data.length;
    const numOfElements = sumOfThemes < 10 ? sumOfThemes : 10;
    currentPage++;
    ctx.editMessageText(
        `Mavzulardan birortasini tanlang:\n${ res.data.slice(numOfElements*(currentPage-1), numOfElements*currentPage).map((item, i) => `\n${i+1+(currentPage-1)*10}  ${item.theme}`) }`,
        sumOfThemes < 10
            ? Markup.inlineKeyboard([
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`))
            ]).oneTime().resize().extra()
            :  Markup.inlineKeyboard([
                currentPage === 1 ? [] : [Markup.callbackButton('Orqaga', 'prev')],
                res.data.slice(10*(currentPage-1), sumOfThemes < 5 ? sumOfThemes : 10*currentPage-5).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+1}`, `${i+(currentPage-1)*10}`)),
                res.data.slice(10*currentPage-5, sumOfThemes < 10*currentPage ? sumOfThemes : 10*currentPage).map((item, i) => Markup.callbackButton(`${i+(currentPage-1)*10+5+1}`, `${i+(currentPage-1)*10+5}`)),
                currentPage === Math.ceil(sumOfThemes/10) ? [] : [Markup.callbackButton('Keyingi', 'next')]
            ]).oneTime().resize().extra()
    )
});

let num = 0;
let trueAns = 0;
bot.action(/([\d])+/g, async ctx => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)
    }
    catch(err) {
        console.log(err)
    }
    num = 0;
    trueAns = 0;
    const index = Number(ctx.match[0]);
    const test = res.data[index].tests[num];
    const answers = test.answers;
    ctx.editMessageText(
        `${index+1}M.  ${res.data[index].theme} \n\n${num+1} ${test.question} \nA) ${answers[0].answer}\nB) ${answers[1].answer}\nC) ${answers[2].answer}\nD) ${answers[3].answer}\nE) {answers[4].answer}`,
        Markup.inlineKeyboard([
            [
                Markup.callbackButton('A', 'a'),
                Markup.callbackButton('B', 'b'),
                Markup.callbackButton('C', 'c'),
                Markup.callbackButton('D', 'd'),
                Markup.callbackButton('E', 'e')
            ]
        ]).extra()
    )
});
bot.action(/([abcde])/g, async ctx => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)
    }
    catch(err) {
        console.log(err)
    }
    // trueAns = 0;
    const index = Number(ctx.update.callback_query.message.text[0])-1;

    const test = res.data[index].tests[num];
    const answers = test.answers;
    let qIndex;
    if(ctx.match[0]==='a') { qIndex=0 }
    else if(ctx.match[0]==='b') { qIndex=1 }
    else if(ctx.match[0]==='c') { qIndex=2 }
    else if(ctx.match[0]==='d') { qIndex=3 }
    else if(ctx.match[0]==='e') { qIndex=4 }
    // console.log(ctx.match[0]);
    const i = answers.findIndex(a => a.isTrue===true);
    if(qIndex===i) {
        trueAns++;
        let ttt = '✅';
        ctx.editMessageText(
            `${index+1}M.  ${res.data[index].theme} \n\n${num+1} ${test.question} \nA) ${answers[0].answer}\nB) ${answers[1].answer}\nC) ${answers[2].answer}\nD) ${answers[3].answer}\nE) {answers[4].answer}`,
            Markup.inlineKeyboard([
                num === res.data[index].tests.length - 1
                    ? [Markup.callbackButton('✅ Natijani ko\'rish', 'r')]
                    : [Markup.callbackButton('✅ Keyingi savol', 'n')]
            ]).extra()
        )
    }

    else {
        let xxx = '❌';
        ctx.editMessageText(
            `${index+1}M.  ${res.data[index].theme} \n\n${num+1} ${test.question} \nA) ${answers[0].answer}\nB) ${answers[1].answer}\nC) ${answers[2].answer}\nD) ${answers[3].answer}\nE) {answers[4].answer}`,
            Markup.inlineKeyboard([
                num === res.data[index].tests.length - 1
                    ? [Markup.callbackButton('❌ Natijani ko\'rish', 'r')]
                    : [Markup.callbackButton('❌ Keyingi savol', 'n')]
            ]).extra()
        )
    }
});

bot.action('n', async ctx => {
    num++;
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)
    }
    catch(err) {
        console.log(err)
    }
    const index = Number(ctx.update.callback_query.message.text[0])-1;

    const test = res.data[index].tests[num];
    const answers = test.answers;

    // console.log(num)

    ctx.editMessageText(
        `${index+1}M.  ${res.data[index].theme} \n\n${num+1} ${test.question} \nA) ${answers[0].answer}\nB) ${answers[1].answer}\nC) ${answers[2].answer}\nD) ${answers[3].answer}\nE) {answers[4].answer}`,
        Markup.inlineKeyboard([
            [
                Markup.callbackButton('A', 'a'),
                Markup.callbackButton('B', 'b'),
                Markup.callbackButton('C', 'c'),
                Markup.callbackButton('D', 'd'),
                Markup.callbackButton('E', 'e')
            ]
        ]).extra()
    )
});


bot.action('r', async ctx => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        // console.log(res.data)
    }
    catch(err) {
        console.log(err)
    }
    const index = Number(ctx.update.callback_query.message.text[0])-1;
    ctx.editMessageText(`${index+1}M.  ${res.data[index].theme} \n\nSiz jami <b>${res.data[index].tests.length}</b> savolning <b>${trueAns}</b> tasiga to'g'ri javob topdingiz\n\nBoshqa mavzuga doir testlarni tanlash uchun /boshlash ni bosing`, {
        parse_mode: 'HTML'
    })
});

let parol = '21oktabr';
bot.on('text', ctx => {
    if(ctx.message.text === parol){
        ctx.reply('http://localhost:3000')
    }
})
















bot.command('admin', ctx => {
    ctx.reply('admin parolini kiriting:')
})
bot.on('callback_query', (ctx) => {
    // Explicit usage
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

    // Using context shortcut
    ctx.answerCbQuery()
})

bot.launch().catch(err => console.log('err', err));

//data.map((item, index) => Markup.callbackButton(`${index}`, `${index}`))
// [1, 2, 3, 4, 5].map((index,item) => Markup.callbackButton(`${index}`, `${item}`))