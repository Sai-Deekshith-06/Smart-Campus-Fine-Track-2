const student = require('../model/student.model')
const fines = require('../model/fine.model')

const studentDetails = async (req, res) => {
    // console.log(data)
    try {
        const data = await student.find({})
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json("Internal Servar Error: in fetching student details")
    }
}

const createFine = async (req, res) => {
    const session = await student.startSession()
    try {
        await session.startTransaction()
        const record = req.body.details
        const date = new Date().toISOString().split('.')[0]
        const allFines = await fines.find()
        const fid = `${date}_${allFines.length + 1}`
        const std = await student.findOne({ id: record.student_id })
        if (!std)
            return res.status(400).json("Student not found")

        await fines.create({
            id: fid,
            studentId: record.student_id,
            category: record.fine_category,
            amount: record.amount,
            reason: record.reason,
            due_date: record.due_date
        })

        std.fines.push(fid)

        await student.updateOne({ id: record.student_id }, { fines: std.fines })


        res.status(200).json("Fine created successfully")
    } catch (err) {
        session.abortTransaction()
        console.log(err)
        res.status(500).json("Error in creating fine")
    } finally {
        session.endSession()
    }
}

const getFines = async (req, res) => {
    try {
        const data = await fines.find({})
        res.status(200).json(data.reverse())
    } catch (err) {
        res.status(500).json("Internal Servar Error: in fetching fine details")
    }
}

const getAnalysis = async (req, res) => {
    try {
        const { load } = req.body
        const data = load
        const allFines = await fines.find()
        data.total_fines = allFines.length
        allFines.forEach((fine) => {
            const bno = fine.studentId.substring(0, 2)
            const batch = data.batches.find(obj => bno === String(obj.batch))
            if (batch) {
                batch.total_fines += 1
                batch.total_amount += fine.amount
            }
            if (fine.status === "pending") {
                data.total_pending += 1
            } else {
                data.total_collected += fine.amount
            }
        })
        // console.log(data)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json("Internal Servar Error: in fetching fine details")
    }
}

const approveId = async (req, res) => {
    try {
        const { id, txnId } = req.body
        const fine = await fines.updateMany({ studentId: id, txnId: txnId }, { status: "paid" }, { new: true })
        // console.log(id, txnId)
        // console.log(fine)
        if (!fine)
            res.status(404).json("fine not found")
        res.status(200).json("Fine status updated to paid")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}

const toApprove = async (req, res) => {
    try {
        const data = await fines.find({ status: 'pending_approval' })
        const std = (await student.find({})).reduce((prev, stdObj) => {
            prev[stdObj.id] = stdObj
            return prev
        }, {})
        const group = {}

        data.forEach(fine => {
            if (!group[fine.txnId]) {
                group[fine.txnId] = {
                    txnId: fine.txnId,
                    studentId: fine.studentId,
                    studentName: std[fine.studentId].name,
                    totalAmount: 0.00,
                    fines: []
                };
            }
            group[fine.txnId].fines.push({
                category: fine.category,
                reason: fine.reason,
                amount: fine.amount,
                due_date: fine.due_date
            })
            group[fine.txnId].totalAmount += fine.amount
        })
        // console.log(group)

        res.status(200).json(group)
    } catch (err) {
        res.status(500).json("Internal Servar Error: in fetching fine details")
    }
}

const deleteFine = async (req, res) => {
    try {
        const { fid, stdId } = req.body

        const std = await student.findOne({ id: stdId })
        if (!std)
            return res.status(400).json("Student not found")

        const updatedStdFines = std.fines.filter(f => f !== fid)
        const result = await fines.deleteOne({ id: fid })
        await student.updateOne({ id: stdId }, { fines: updatedStdFines })

        if (result.deletedCount == 1)
            return res.status(200).json("fine deleted")
        res.status(400).json('fine not found')
    } catch (error) {
        res.status(500).json('Internal Server Error...')
    }
}

module.exports = { studentDetails, createFine, getFines, getAnalysis, approveId, toApprove, deleteFine }