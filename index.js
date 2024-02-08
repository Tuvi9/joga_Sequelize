const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();

// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database connection
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelizer');

// Test the connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);

// Set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000.");
})