const mongoose = require('mongoose')

const std = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: email,
        default: null
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true,
        enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    },
    fines: [{ type: String }]
})

exports.student = mongoose.model('student', std)