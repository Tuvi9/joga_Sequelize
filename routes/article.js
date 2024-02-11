const express = require('express');
const router = express.Router();
const articleController = require('../controller/article')

//! GET ALL ARTICLES
router.get('/', articleController.getAllArticles);
//! GET ARTICLE BY SLUG
router.get('/:slug', articleController.getArticleBySlug);

module.exports = router;