const users = require('../model/users.model')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    // console.log(req)
    const { uname, password } = req.body.details
    const user = await users.findOne({ id: uname })
    if (!user)
        res.status(400).json("Invalid Username")

    if (password && user.password === password) {

        jwt.sign({ user }, "secret", (err, token) => {
            if (err) {
                console.log(err)
                res.status(500).json("Error in token generation")
            } else {
                res.status(200).json({ status: "Login Successful", token })
                console.log(token)
                console.log(user.id, " logged in")
            }
        })
    } else
        res.status(400).json("Invalid Password")
}

module.exports = { login }