const assert = require('assert')
const path = require('path')
const fs = require('fs')
const { wwwroot, outputs } = require('../configs/config')
const { projects } = require('../configs/common_variables')
const logger = require('../helpers/logger')

const path_exists = (p) => assert(fs.existsSync(p), `${p} does not exist.`)

const file_name = 'Common_Web.css'

const file_path = path.join(wwwroot, file_name)

path_exists(file_path)

const project_folder_path = path.join(wwwroot, '..', 'projects')

path_exists(project_folder_path)

projects.forEach((project) => {
    let write_source_path = path.join(project_folder_path, project, file_name)
    path_exists(write_source_path)


    fs.copyFile(file_path, write_source_path, (err) => {
        if (err) {
            logger.err(err)
            throw err;
        }

        logger.info(`Copied ${file_name} to ${write_source_path}`)
    })
})