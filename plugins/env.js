'use strict'

const fp = require('fastify-plugin')
const fastifyEnv = require('@fastify/env')

/** @param {import('fastify').FastifyInstance} app */
module.exports = fp(async function envSchema (app) {
  app.register(fastifyEnv, {
    confKey: 'appConfig',
    dotenv: true,
    schema: {
      type: 'object',
      required: ['PLT_DISCORD_TOKEN', 'PLT_BETTERSTACK_API_KEY'],
      properties: {
        PLT_BASE_URL: { type: 'string' },
        PLT_BETTERSTACK_API_KEY: { type: 'string' },
        PLT_DISCORD_TOKEN: { type: 'string' }
      }
    }
  })
}, {
  name: 'appConfig'
})
