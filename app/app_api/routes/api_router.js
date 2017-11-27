'use strict';

const express = require('express');
const router = express.Router();

const booksAPIController = require('../controllers/books-api');
//const readingListAPIController = require('../controllers/reading-list-api');

/* -- GET ALL BOOKS -- */
router
    .route('/')
    .get(booksAPIController.booksListByName);

/* -- GET BOOK DETAILS -- */
router
    .route('/book/:bookid')
    .get(booksAPIController.booksReadOne);

// /* -- GET USER READING LIST -- */
// router
//     .route('/reading-list/:userid')
//     .get(readingListAPIController.readingListByName)
//     .post(readingListAPIController.readingListAdd);

module.exports = router;