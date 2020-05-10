import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, printf, timestamp } = format

const myFormat = () => combine(printf(({ message }) => `${message}`))
const fileFormat = () =>
  combine(
    timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
    printf(({ timestamp, message }) => `${timestamp}: ${message}`)
  )
export const logger = createLogger({
  transports: [
    new DailyRotateFile({
      filename: 'koa-server-error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      dirname: 'logs',
      level: 'error',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: fileFormat(),
    }),
    new DailyRotateFile({
      filename: 'koa-server-combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      dirname: 'logs',
      level: 'info',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: fileFormat(),
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      level: 'info',
      format: myFormat(),
    })
  )
}
