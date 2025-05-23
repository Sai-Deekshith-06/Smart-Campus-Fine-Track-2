const fines = require('../model/fine.model')
const student = require('../model/student.model')

const getFines = async (req, res) => {
    try {
        const { studentId } = req.body
        // console.log(req.body)
        // console.log(studentId)
        const data = await fines.find({ studentId: studentId })
        const studentData = (await student.find({ id: studentId }))[0]
        if (!data || data.length === 0)
            res.status(200).json("No Fine records")
        // console.log(data)
        res.status(200).json({ data, studentData })
    } catch (err) {
        res.status(400).json("Internal Servar Error: in fetching fine details")
    }
}

const payedFines = async (req, res) => {
    try {
        const { txnId, selectedFines } = req.body
        // console.log(req.body)
        console.log(txnId)
        console.log(selectedFines)

        const exist = await fines.find({ txnId: txnId })
        if (exist.length > 0) {
            return res.status(400).json('Invalid UTR Number: Already exists')
        }
        const result = await fines.updateMany(
            { id: { $in: selectedFines } },   // Correct filtering
            { $set: { status: "pending_approval", txnId: txnId } }  // Explicit $set
        );
        if (result.modifiedCount === 0) {
            return res.status(400).json("No fines were updated.");
        }
        res.status(200).json(`Status updated for ${result.modifiedCount} fines`)
    } catch (err) {
        console.log(err)
        res.status(500).json("Internal Server Error while updating fines");
    }
}

module.exports = { getFines, payedFines }