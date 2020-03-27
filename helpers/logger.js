const winston = require('winston')
const { combine, timestamp, printf, colorize } = winston.format;

const my_format = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`
});

const logger = winston.createLogger({
    format: combine(
        colorize(),
        timestamp(),
        my_format,
    ),
    transports: [
        new winston.transports.Console({
            handleExceptions: true,
        }),
    ]
})

module.exports = logger
