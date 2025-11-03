const users = require('../modal/usermodel')
const jwt = require('jsonwebtoken')

require('../modal/usermodel')

exports.userRegister = async (req, res) => {
    const { username, email, password } = req.body

    try {

        const existing = await users.findOne({ email })
        if (existing) {
            return res.status(406).json("Already Registerd user")
        } else {
            const newuser = new users({ username, email, password })

            await newuser.save()
            return res.status(200).json(newuser)


        }
    } catch (err) {
        console.log(err);

    }

}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    console.log("Body received:", req.body);
    try {

        const existingUser = await users.findOne({ email, password })

        if (existingUser) {
            // create token using jwtwbtoken
            const Token = jwt.sign({ userId: existingUser._id }, process.env.JWT_PASSWORD)
            //  to pass Token in to user status
            res.status(200).json({ user: existingUser, Token })



        } else {
            res.status(401).json("Invalid Email or Password")
        }

    } catch (err) {
        res.status(404).json(err)
    }
}
