'use strict';

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const othersController = require('../controllers/others');
const adminController = require('../controllers/admin');

/* -- Book Pages -- */
/* GET home page. */
router.get('/', booksController.booksList);
/* GET the book details page */
router.get('/book', booksController.bookDetails);
/* GET the users reading list page */
router.get('/reading-list', booksController.readingList);

/* -- Other Pages -- */
/* GET about page */
router.get('/about', othersController.about);

/* -- Admin Pages -- */
/* GET the admin home page */
router.get('/admin', adminController.admin);
/* GET the add book to library page */
router.get('/admin/add-book-to-library', adminController.addBookToLibrary);
/* GET the remove book from library page */
router.get('/admin/remove-book-from-library', adminController.removeBookFromLibrary);

module.exports = router;
