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
router.patch('/admin/article/update/:id', articleAdminController.updateArticle)
//! DELETE ARTICLE
router.delete('/admin/article/delete/:id', articleAdminController.deleteArticle)

module.exports = router;