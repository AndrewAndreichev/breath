const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
// const token = '1081433142:AAGVsj_UtDkB2xgHR9DyUJ6cFEcAsVuh3Qk';
const token = '1218848420:AAEZtu8WFobMrtbUC7JFv3TMjIUgPt5Zr1c';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//конфиг клавиатуры
const keyboard = [
  [
    {
      text: 'ДНЕПР', // текст на кнопке
      callback_data: 'moreKeks' // данные для обработчика событий
    }
  ],
  [
      {
        text: 'БАХМУТ',
        callback_data: 'morePes'
      }
  ],
  [
    {
      text: 'БЕЛАЯ-ЦЕРКОВЬ',
      callback_data: 'morePes1'
    }
  ],
  [
      {
        text: 'Ссылка на сайт BREATH',
        url: 'https://rdadr.github.io/breath/' //внешняя ссылка
      }
    ]
];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

// отправляем сообщение
bot.sendMessage(chatId, 'ВЫБЕРИТЕ ГОРОД. ДАННЫЕ ДАТЧИКОВ РМ2.5 ВЗЯТЫ С РЕСУРСА  https://api.saveecobot.com/output.json', { // прикрутим клаву
      reply_markup: {
          inline_keyboard: keyboard
      }
  });
});

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  let img = '';

  if (query.data === 'moreKeks') { // если
          bot.sendMessage(chatId, 'Средний уровень загрязненнасти воздуха РМ2.5 для данного города 10');
          // img = 'xxx.png';
  }

  if (query.data === 'morePes') { // если 
      // img = 'pes.png';
      bot.sendMessage(chatId, 'Средний уровень загрязненнасти воздуха РМ2.5 для данного города 20');
  }

  if (query.data === 'morePes1') { // если 
    // img = 'pes.png';
    bot.sendMessage(chatId, 'Средний уровень загрязненнасти воздуха РМ2.5 для данного города  5');
}

});




  