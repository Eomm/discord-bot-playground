'use strict'

const fp = require('fastify-plugin')

const buildDiscordBot = require('../lib/discord-bot')

/** @param {import('fastify').FastifyInstance} fastify */
module.exports = fp(async function discordBot (fastify, opts) {
  const bot = buildDiscordBot({
    logger: fastify.log,
    auth: {
      token: fastify.appConfig.PLT_DISCORD_TOKEN
    }
  })

  fastify.decorate('bot', bot)

  await bot.start()

  fastify.addHook('onClose', async () => {
    await bot.stop()
  })
}, {
  name: 'discordBot',
  dependencies: ['appConfig']
})
