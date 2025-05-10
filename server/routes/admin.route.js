const express = require('express')
const routes = express.Router()

const { studentDetails, createFine, getFines } = require('../controller/admin.controller')

routes.get('/getStudentsDetails', studentDetails)
routes.post('/createFine', createFine)

module.exports = routes;