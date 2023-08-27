'use strict'

const { REST, Routes } = require('discord.js')
const dotenv = require('dotenv')

dotenv.config()

/**
 * This script is used to setup the bot's commands and permissions.
 */
async function main () {
  console.log('Setting up bot commands...')
  const { DISCORD_TOKEN, DISCORD_APP_ID } = process.env

  const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!'
    }
  ]

  const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN)

  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationCommands(DISCORD_APP_ID), { body: commands })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}

main()
