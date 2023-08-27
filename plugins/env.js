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
      required: ['DISCORD_TOKEN'],
      properties: {
        DISCORD_TOKEN: { type: 'string' }
      }
    }
  })
}, {
  name: 'appConfig'
})
