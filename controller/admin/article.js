const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelizer');
//! All models are now stored in the models object
const models = require('../../models');

//! CREATE NEW ARTICLE
const createArticle = (req, res) => {
    //* Get the data from the request body
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;

    //* Create a new article
    const newArticle = 
    models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article);
        return res.status(200).json({ message: 'Article created successfully' });
    })
    .catch(error => {
        console.log(error);
        res.status(500).send({ error: message });
    });
};

//! UPDATE ARTICLE
const updateArticle = (req, res) => {
    //! Get the data from the request body
        let name = req.body.name;
        let slug = req.body.slug;
        let image = req.body.image;
        let body = req.body.body;
    
        //* Update the article
        const updatedArticle = 
        models.Article.update({
            name: name,
            slug: slug,
            image: image,
            body: body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }, {
            //* Where the id is equal to the id in the request parameters
            where: {
                id: req.params.id
            }
        })
        .then(article => {
            console.log(article);
            return res.status(200).json({ message: 'Article updated successfully' });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({ error: message });
        });
};

//! DELETE ARTICLE
const deleteArticle = (req, res) => {
    models.Article.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(article => {
        console.log(article);
        return res.status(200).json({ message: 'Article deleted successfully' });
    }) .catch (error => {
        console.log(error);
    })
};

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};