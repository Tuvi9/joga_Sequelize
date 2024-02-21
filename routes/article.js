const express = require('express');
const router = express.Router();
const articleController = require('../controller/article');
const articleAdminController = require('../controller/admin/article');

//! GET ALL ARTICLES
router.get('/', articleController.getAllArticles);
//! GET ARTICLE BY SLUG
router.get('/:slug', articleController.getArticleBySlug);
//! CREATE NEW ARTICLE
router.post('/admin/article/create', articleAdminController.createArticle)
//! UPDATE ARTICLE
router.post('/admin/article/update/:id', articleAdminController.updateArticle)

module.exports = router;