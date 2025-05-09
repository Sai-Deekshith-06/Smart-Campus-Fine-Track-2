const categories = require('../model/fineCategories.model')

const fineCategories = async (req, res) => {
    try {
        const data = await categories.find({})
        // console.log(data)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(400).json("Error in fetching fine categories")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { fineCategories }