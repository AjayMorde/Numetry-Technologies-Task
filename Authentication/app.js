const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./connection/database')
const users = require('./routes/user')
const loginuser = require('./routes/login')
const roles = require('./routes/role')


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
app.get('/role', (req, res) => {
    res.sendFile('role.html', { root: 'views' })
})


app.use('/signup', users);
app.use('/login', loginuser)
app.use('/get', roles)
sequelize.sync().then(() => {



    app.listen(3000, () => {
        console.log('server is running on port  3000')
    })


}).catch((err) => {
    console.log(err)

})