const student = require('../model/student.model')
const fines = require('../model/fine.model')

const studentDetails = async (req, res) => {
    const data = await student.find({})
    // console.log(data)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json("Error in fetching student details")
    }
}

const createFine = async (req, res) => {
    const session = await student.startSession()
    try {
        await session.startTransaction()
        const record = req.body.details

        const std = await student.findOne({ id: record.student_id })
        if (!std)
            return res.status(400).json("Student not found")

        const allFines = await fines.find()
        await fines.create({
            id: allFines.length + 1,
            studentId: record.student_id,
            category: record.fine_category,
            amount: record.amount,
            reason: record.reason,
            due_date: record.due_date
        })

        std.fines.push(allFines.length + 1)

        await student.updateOne({ id: record.student_id }, { fines: std.fines })


        res.status(200).json("Fine created successfully")
    } catch (err) {
        session.abortTransaction()
        console.log(err)
        res.status(400).json("Error in creating fine")
    } finally {
        session.endSession()
    }
}

const getFines = async (req, res) => {
    console.log(req.body)
    res.status(200).json("Fine created successfully")
}



module.exports = { studentDetails, createFine, getFines }