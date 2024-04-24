const TaxiBookings = require('../models/taxi_model');
const Users = require('../models/user')

const getAllTaxiBookings = async(req, res) => {
    try {
        const data = await TaxiBookings.findAll({ where: { UserId: req.user.id } }); // only those TaxiBookings which id of that TaxiBookings match with User uid
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

module.exports = { getAllTaxiBookings }