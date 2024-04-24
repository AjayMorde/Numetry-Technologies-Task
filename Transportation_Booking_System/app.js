const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./connection/database')
const users = require('./routes/user')
const loginuser = require('./routes/login')
const busbooking = require('./routes/bus')
const getBusbooking = require('./routes/getBusBookings')
const deleteBusBookings = require('./routes/deleteBusBookings')
const taxi_data = require('./routes/taxi')
const getTaxiBookings = require('./routes/getTaxiBookings')
const deleteTaxiBookings = require('./routes/deleteTaxiBookings')
const railway_data = require('./routes/railway')
const railwayBookings = require('./routes/getRailwayBookings')
const deleteraliwayBookings = require('./routes/deleteRailwaysBookings')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('signup.html', { root: 'views' })
});
app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: 'views' })
})

app.get('/booking', (req, res) => {
    res.sendFile('booking.html', { root: 'views' })
})
app.get('/bus', (req, res) => {
    res.sendFile('bus.html', { root: 'views' })
})
app.get('/taxi', (req, res) => {
    res.sendFile('taxi.html', { root: 'views' })
})


app.get('/railway', (req, res) => {
    res.sendFile('railway.html', { root: 'views' })
})


app.get('/userbookings', (req, res) => {
    res.sendFile('userbookings.html', { root: 'views' })
})

app.get('/userTaxiBookings', (req, res) => {
    res.sendFile('userTaxiBookings.html', { root: 'views' })
})


app.get('/userRailwayBookings', (req, res) => {
    res.sendFile('userRailwayBookings.html', { root: 'views' })
})



app.use('/signup', users);
app.use('/login', loginuser)
app.use('/bus', busbooking)
app.use('/get', getBusbooking)
app.use('/delete/', deleteBusBookings)
app.use('/taxi', taxi_data)
app.use('/gettax', getTaxiBookings)
app.use('/delete/', deleteTaxiBookings)
app.use('/railway', railway_data)
app.use('/get', railwayBookings)
app.use('/railwaydelete/', deleteraliwayBookings)
sequelize.sync().then(() => {



    app.listen(3000, () => {
        console.log('server is running on port  3000')
    })


}).catch((err) => {
    console.log(err)

})