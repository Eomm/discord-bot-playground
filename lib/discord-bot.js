'use strict'

const { Client, GatewayIntentBits } = require('discord.js')

module.exports = function buildDiscordBot ({
  logger = console,
  auth
}) {
  const bot = new Client({
    intents: [
      GatewayIntentBits.Guilds
    ]
  })

  bot.on('ready', () => {
    console.log('READY!')
  })

  bot.on('interactionCreate', async interaction => {
    console.log(interaction)

    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!')
    }
  })

  bot.on('message', msg => {
    console.log(JSON.stringify(msg, null, 2))

    if (msg.author.bot) return // Ignore all bots
    // if (msg.content.startsWith(settings.prefix)) return; // It always has to starts with the prefix which is '!'

    if (msg.content.startsWith('ping')) { // When a player does '!ping'
      msg.reply('Pong!') // The bot will say @Author, Pong!
    }
  })

  return {
    start: () => bot.login(auth.token),
    stop: () => bot.destroy()
  }
}
