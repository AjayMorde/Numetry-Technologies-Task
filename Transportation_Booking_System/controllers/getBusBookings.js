const BusBookings = require('../models/bus_model');
const Users = require('../models/user')

const getAllBusBookings = async(req, res) => {
    try {
        const data = await BusBookings.findAll({ where: { UserId: req.user.id } }); // only those BusBookings which id of that BusBookings match with User uid
        const loggedInUserId = req.user.id
        if (!loggedInUserId) {
            return res.status(400).json({ error: 'User ID not provided' });
        }
        const loggedInUser = await Users.findByPk(loggedInUserId);
        const loggedInUserName = loggedInUser.name;
        // console.log('===============================================>', loggedInUserName)

        res.status(200).json({ data: data, name: loggedInUserName })


    } catch (err) {
        console.log(err);
        res.status(400).json({ failed: "Error Occurred" });
    }
}

module.exports = { getAllBusBookings }