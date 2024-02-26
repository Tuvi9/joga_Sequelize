const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');


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

//! Log the HTTP method of each request
app.use((req, res, next) => {
    console.log(`HTTP Method: ${req.method}`);
    next();
});

//! ARTICLES
//* GET ALL ARTICLES
app.use('/', articleRouter);

//* GET ARTICLE BY SLUG
app.use('/article', articleRouter);

//* CREATE NEW ARTICLE
app.use('/admin/article', articleRouter);

//* UPDATE ARTICLE
app.use('/admin/article/update', articleRouter);

//! AUTHORS
//* GET AUTHOR BY ID
app.use('/author', authorRouter);


// Set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000.");
})