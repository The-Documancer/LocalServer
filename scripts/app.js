const express = require('express')
const { outputs } = require('../configs/config')
const logger = require('../helpers/logger')

const app = express()
const port = 3000

const options = {
    index: './index.htm',
}

app.use(express.static(outputs, options))

app.listen(port, () => logger.info(`Running static server on port ${port}`))
