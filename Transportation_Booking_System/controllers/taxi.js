const taxi_booking = require('../models/taxi_model');
const sequelize = require('sequelize')


const createBooking = async(req, res) => {


    try {


        const { date, state, city, pickup, dropoff, passenger, time, payment, price } = req.body;

        // console.log(' ================================= >', req.user)
        // console.log(' ================================= >', req.user.id)

        const newBooking = await taxi_booking.create({
            date,
            state,
            city,
            pickup,
            dropoff,
            passenger,
            time,
            payment,
            price,
            UserId: req.user.id
        });


        res.status(200).json({
            success: true,
            message: 'Booking created successfully',
            booking: newBooking
        });

    } catch (error) {


        console.error('Error creating booking:', error);

        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the booking'
        });
    }
};

module.exports = {
    createBooking
};