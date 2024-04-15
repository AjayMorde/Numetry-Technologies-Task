const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const Students = sequelize.define('Students', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    City: {
        type: Sequelize.STRING
    },
    Age: {
        type: Sequelize.INTEGER
    },
    Contact: {
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Students;
