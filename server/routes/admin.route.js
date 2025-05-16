const express = require('express')
const routes = express.Router()

const { studentDetails, createFine, getFines, getAnalysis, approveId, toApprove, deleteFine } = require('../controller/admin.controller')

routes.post('/getAnalysis', getAnalysis)            //for dashboard
routes.get('/getStudentsDetails', studentDetails)   //for autofilling email in new fine entry
routes.post('/createFine', createFine)              //for new fine entry
routes.get('/getFines', getFines)                   //for view fines
routes.post('/deleteFine', deleteFine)              //for view fines
routes.post('/approve', approveId)                  //for 
routes.get('/toapprove', toApprove)

module.exports = routes;