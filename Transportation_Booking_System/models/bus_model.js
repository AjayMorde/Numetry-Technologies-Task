const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const bus_booking = sequelize.define('bus_booking', {
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
    bus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    other: {
        type: Sequelize.STRING,

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
    ac: {
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

module.exports = bus_booking;