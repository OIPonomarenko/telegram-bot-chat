const dotenv = require('dotenv');

dotenv.config();

const config = {
    botToken: process.env.BOT_TOKEN,
};

const validateConfig = () => {
    if (!config.botToken) {
        throw new Error('BOT_TOKEN is not defined in the environment variables');
    }
};

validateConfig();

module.exports = config;