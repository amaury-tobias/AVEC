import Koa from 'koa'
// import Router from '@koa/router'
import koaLogger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import { logger } from './services/Logger'

const PORT = process.env.API_PORT || 80
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
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
  app.use(cors())
  app.use(koaLogger())
  app.use(bodyParser())
  app.use(json())
  app.use((ctx) => {
    ctx.throw(404)
  })

  return app
}

async function setupDB() {
  mongoose.connect(url, options)
}

async function start() {
  try {
    await setupDB()
    logger.info('MongoDB is connected')
    const app = setupKoa()
    app.listen(PORT, () => logger.info(`Koa server listening on ${PORT}`))
  } catch (err) {
    logger.error(err)
  }
}
start()
