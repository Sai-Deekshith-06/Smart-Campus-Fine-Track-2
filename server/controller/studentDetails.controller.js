const student = require('../model/student.model')

const studentDetails = async (req, res) => {
    const data = await student.find({})
    // console.log(data)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json("Error in fetching student details")
    }
}

module.exports = { studentDetails }