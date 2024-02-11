const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelizer');
//! All models are now stored in the models object
const models = require('../models');

//! GET ALL ARTICLES
const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles);
        return res.status(200).json({ articles });
    }) .catch(error => {
        console.log(error);
        return res.status(500).json({ error: message });
    })
}

//! GET ARTICLE BY SLUG
const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        //! Include the Author of the article
        include: [{
            model: models.Author,
        }],
    })
    .then(article => {
        console.log(article);
        return res.status(200).json({ article });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: message });
    });
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};