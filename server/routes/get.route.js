const express = require('express')
const routes = express.Router()

const { fineCategories } = require('../controller/fineCategories.controller')

routes.get('/getFineCategories', fineCategories)

module.exports = routes