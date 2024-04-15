const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const sequelize = require('./connection/database')
const mainpage = require('./routes/main')
const img = require('./routes/img');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('', (req, res) => {
    res.sendFile('img.html', { root: 'views' });
});
// app.use(mainpage)
app.use('/image', img);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is started on port ${port}`);
        });
    })
    .catch(err => {
        console.log('Error syncing Sequelize:', err);
    });