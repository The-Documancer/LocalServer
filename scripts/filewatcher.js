const chokidar = require('chokidar')
const path = require('path')
const fs = require('fs')
const logger = require('../helpers/logger')
const { wwwroot, outputs } = require('../configs/config')


const files_to_watch = [
    "*.js",
    "*.css",
    "index.htm",
    "privacy_policy.htm",
    "cookie_policy.htm"
]

let files = files_to_watch.map((file) => path.join(wwwroot, file))

const watcher = chokidar.watch(files, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100,
    },
})

watcher.on('change', (file_path, stats) => {
    let dest_path = path.join(outputs, path.basename(file_path))
    fs.copyFile(file_path, dest_path, () => logger.info(`Copied ${file_path} to ${dest_path}`))
})

watcher.on('error', error => logger.error(`Watcher error: ${error}`))

logger.info(`Filewatcher watching: ${files.map(file => `\n    ${file}`)}`)