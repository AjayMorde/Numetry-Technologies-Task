const { where } = require('sequelize')
const Users = require('../models/user')

const getRoles = async(req, res) => {
    try {

        const role = await Users.findAll({
            attributes: ['name', 'number', 'role']
        })
        res.status(200).json({ role: role })
        console.log(role)

    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: "Error to fetching roles" })


    }
}


module.exports = { getRoles }