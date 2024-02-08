const express = require('express');
const router = express.Router();
const articleController = require('../controller/article')

//! GET ALL ARTICLES
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

module.exports = router;