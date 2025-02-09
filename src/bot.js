const { Telegraf } = require('telegraf');
const express = require('express');
const config = require('./config');


const bot = new Telegraf(config.botToken);
const app = express();

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.hears('create', (ctx) => {
    if (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') {
        const userId = ctx.from.id;
        bot.telegram.sendMessage(userId, 'You have requested to create a new conversation. How can I assist you?')
            .then(() => {
                ctx.reply('I have sent you a private message.');
            })
            .catch(err => {
                console.error(`Failed to send private message to ${userId}:`, err);
                ctx.reply('Failed to send you a private message. Please make sure you have started a conversation with me.');
            });
    }
});

// Set the bot to use webhooks
const webhookPath = `/bot${config.botToken}`;
app.use(bot.webhookCallback(webhookPath));

// Start the express server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    const webhookUrl = `https://da3b-46-98-167-64.ngrok-free.app${webhookPath}`;
    console.log(`Server is running on port ${PORT}`);
    bot.telegram.setWebhook(webhookUrl);
});

console.log('Bot is running...');
