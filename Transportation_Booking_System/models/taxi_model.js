const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const taxi_booking = sequelize.define('taxi_booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pickup: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dropoff: {
        type: Sequelize.STRING,
        allowNull: false
    },

    passenger: {
        type: Sequelize.STRING,
        allowNull: false

    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    payment: {
        type: Sequelize.STRING,
        allowNull: false

    },

    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = taxi_booking;