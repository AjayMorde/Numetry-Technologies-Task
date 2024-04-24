const Users = require('../models/user');

const addingData = async(req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const number = req.body.number;
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        console.log('===========================>', name, email, number, password, cpassword)

        await Users.create({ name, email, number, password, cpassword });
        res.status(200).json({ msg: 'Successfully created a new user' });




    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Error during signup" })

    }
}
module.exports = { addingData }