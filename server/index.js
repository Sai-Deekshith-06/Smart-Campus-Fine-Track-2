const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = 4000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/mfinesdb')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log('Error Connecting to Mongodb: ', err))

const loginRoute = require('./routes/login.route')
const adminRoute = require('./routes/admin.route')
const studentRoute = require('./routes/student.route')

app.use('/login', loginRoute)
app.use('/admin', adminRoute)
app.use('/student', studentRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})