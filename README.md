# Telegram Bot

This project is a simple Telegram bot built using Node.js. It utilizes the Telegram Bot API to interact with users and respond to messages.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/telegram-bot.git
   cd telegram-bot
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your bot token:
   ```
   BOT_TOKEN=your_bot_token_here
   ```

## Configuration

The bot's configuration settings, including the bot token, are managed in the `src/config/index.js` file. Ensure that your `.env` file is correctly set up with the necessary environment variables.

## Usage

To start the bot, run the following command:
```
npm start
```

The bot will listen for incoming messages and respond according to the logic defined in `src/bot.js`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.