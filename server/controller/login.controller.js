const users = require('../model/users.model')

const login = async (req, res) => {
    // console.log(req)
    const { uname, password } = req.body.details
    const user = await users.findOne({ id: uname })
    if (!user)
        res.status(400).json("Invalid Username")

    if (password && user.password === password) {
        console.log(user.id, " logged in")
        res.status(200).json("Login Successful")
    } else
        res.status(400).json("Invalid Password")
}

module.exports = { login }