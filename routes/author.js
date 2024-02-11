const express = require('express');
const router = express.Router();
const authorController = require('../controller/author');

//! GET AUTHOR BY ID
router.get('/:id', authorController.getAuthorById);

module.exports = router;