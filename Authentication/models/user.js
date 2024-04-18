const Sequelize = require('sequelize');
const sequelize = require('../connection/database')

const Users = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.STRING


    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpassword: {
        type: Sequelize.STRING,
        allowNull: false

    }


}, )
module.exports = Users