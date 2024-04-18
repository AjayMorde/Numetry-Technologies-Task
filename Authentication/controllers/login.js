const Users = require('../models/user');

// function generateAccessToken(id, name) {
//     return jwt.sign({ userId: id, name: name }, 'ajayshgdyudgwyuegwgwe7434734hsd')

// }
const loginUser = async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await Users.findOne({
            where: {
                email: email,
                password: password
            }
        })

        if (!user) {
            res.status(404).json({ msg: 'something went wrong' })
        } else {
            res.status(200).json({ msg: "login Successfully" })
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ msg: "user not found" })
    }
}
module.exports = { loginUser }