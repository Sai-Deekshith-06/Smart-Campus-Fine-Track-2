const express = require('express')
const routes = express.Router()

const { studentDetails } = require('../controller/studentDetails.controller')

routes.get('/getStudentsDetails', studentDetails)

module.exports = routes;