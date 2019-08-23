import winston, { createLogger } from 'winston'

const level = process.env.LOG_LEVEL || 'debug'

const logger = createLogger({
  transports: [
    new winston.transports.Console({
      level,
      timestamp: () => new Date().toISOString(),
    }),
  ],
  exitOnError: false,
})

export default logger
