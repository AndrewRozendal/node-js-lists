'use strict';

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const othersController = require('../controllers/others');

/* -- Book Pages -- */
/* GET home page. */
router.get('/', booksController.booksList);
/* GET the book details page */
router.get('/book', booksController.bookDetails);
/* GET the add book to library page */
router.get('/book/add-book-to-library', booksController.addBookToLibrary);
/* GET the remove book from library page */
router.get('/book/remove-book-from-library', booksController.removeBookFromLibrary);
/* GET the users reading list page */
router.get('/reading-list', booksController.readingList);

/* -- Other Pages -- */
/* GET about page */
router.get('/about', othersController.about);

module.exports = router;
