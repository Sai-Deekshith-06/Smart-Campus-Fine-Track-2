const express = require('express')
const routes = express.Router()

const { getFines, payedFines } = require('../controller/student.controller')

routes.post('/getFines', getFines)
routes.post('/payedFines', payedFines)

module.exports = routes;