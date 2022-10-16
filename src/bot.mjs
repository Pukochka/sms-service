import { Telegraf } from 'Telegraf';

const bot = new Telegraf('5720342237:AAHl6IKOShvfcAM445tMPgN4G7chmrxZJKU');
bot.start((ctx) =>
  ctx.reply('Welcome dasd', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'asdasd',
            web_app: { url: 'https://pukochka.github.io/sms-service/' },
          },
        ],
      ],
    },
  })
);

bot.launch();
