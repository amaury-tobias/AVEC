import Koa from 'koa'
import passport from 'koa-passport'
import koaLogger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import { logger } from './services/Logger'
import { setupKeys } from './services/Keys'
import { PassportProvider } from './services/PassportProvider'

import authRouter from './routes/Auth'

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
  API_PORT,
} = process.env
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
}
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

function setupKoa() {
  const app = new Koa()
  app.on('error', (err, ctx) =>
    logger.error(
      `${err.status} ${ctx.request.method}: ${ctx.request.url}\n${err.stack}`
    )
  )

  app.use(helmet())
  app.use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  )
  app.use(koaLogger())
  app.use(bodyParser())
  app.use(json())
  app.use(passport.initialize())
  app.use(authRouter.routes()).use(authRouter.allowedMethods())
  return app
}

async function setupDB() {
  mongoose.connect(url, options)
}

function setupPassport(keys: { JWT_SECRET: Buffer; JWT_CERT: Buffer }) {
  PassportProvider.initialize({
    secret: keys.JWT_SECRET,
    cert: keys.JWT_CERT,
  })
  passport.use(PassportProvider.localStrategy)
  passport.use(PassportProvider.jwtStrategy)
}

async function start() {
  try {
    await setupDB()
    const keys = await setupKeys()
    setupPassport(keys)
    const app = setupKoa()
    app.listen(API_PORT, () =>
      logger.info(`Koa server listening on ${API_PORT}`)
    )
  } catch (err) {
    logger.error(err.stack)
  }
}
start()
