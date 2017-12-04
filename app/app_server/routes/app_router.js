'use strict';

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const othersController = require('../controllers/others');
const adminController = require('../controllers/admin');
const eportfolioController = require('../controllers/ePortfolio');

/* -- Book Pages -- */
/* GET home page. */
router.get('/', booksController.booksList);
/* GET the book details page */
router.get('/book/:bookid', booksController.bookDetails);
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

/* -- E-Portfolio Pages -- */
/* GET home page */
router.get('/eportfolio/', eportfolioController.home);
/* GET about page */
router.get('/eportfolio/about', eportfolioController.about);
/* GET resume page */
router.get('/eportfolio/resume', eportfolioController.resume);
/* GET examples page */
router.get('/eportfolio/examples', eportfolioController.examples);
/* GET blog page */
router.get('/eportfolio/blog', eportfolioController.blog);
/* GET contact page */
router.get('/eportfolio/contact', eportfolioController.contact);

module.exports = router;
