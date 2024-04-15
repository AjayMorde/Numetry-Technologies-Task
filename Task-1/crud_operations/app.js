const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const sequelize = require('./connection/database')


const studentsData = require('./routes/students_data');
const mainPageRouter = require('./routes/mainPage');
const getData = require('./routes/getData');
const deleteData = require('./routes/deleteData')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(mainPageRouter)
app.use('/add-studentsData', studentsData)
app.use('/dataee', getData);
app.use('/deletedata', deleteData)


sequelize.sync()
    .then(() => {
        app.listen(4000, () => {
            console.log("server Is started on port 3000");
        })
    })
    .catch(err => {
        console.log('==============>', err);
    });