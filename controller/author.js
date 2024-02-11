const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelizer');
const models = require('../models');


//! GET AUTHOR BY ID
const getAuthorById = (req, res) => {
    models.Author.findByPk(req.params.id, {
        //! Include the Author with their own articles
        include: [{
            model: models.Article,
        }],
    })
    .then(author => {
        console.log(author);
        return res.status(200).json({ author });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: message });
    });
}

module.exports = {
    getAuthorById,
};