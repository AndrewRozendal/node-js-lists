'use strict';

const express = require('express');
const router = express.Router();

const booksAPIController = require('../controllers/books-api');
const othersAPIController = require('../controllers/others-api');
const adminAPIController = require('../controllers/admin-api');

/* -- BOOKS -- */
/* -- GET ALL BOOKS -- */
router
    .route('/books')
    .get(booksAPIController.booksListByName);

/* -- GET BOOK DETAILS -- */
router
    .route('/books/book-details/:bookid')
    .get(booksAPIController.booksReadOne);

/* -- GET USER READING LIST -- */
router
    .route('/books/reading-lists/')
    .get(booksAPIController.readingListByName);

/* -- ADD BOOK TO USER READING LIST -- */
router
    .route('/books/reading-lists/:userid/books/')
    .post(booksAPIController.readingListAddOne);

/* -- REMOVE BOOK FROM USER READING LIST -- */
router
    .route('/books/reading-lists/:userid/books/:bookid')
    .delete(booksAPIController.readingListRemoveOne);



/* -- OTHERS -- */
/* -- ABOUT INFO -- */
router
    .route('/about')
    .get(othersAPIController.getData);


/* -- ADMIN -- */
/* -- CHECK ADMIN CREDENTIALS -- */
router
    .route('/admin/:adminid')
    .post(adminAPIController.checkCredentials)
    .get(adminAPIController.getAdminDashboard);

/* -- ADD A BOOK TO THE DB -- */
router
    .route('/admin/add-book-to-library/:newBook')
    .post(adminAPIController.addBookToLibrary);

/* -- REMOVE A BOOK FROM THE DB -- */
router
    .route('/admin/remove-book-from-library/:bookid')
    .delete(adminAPIController.removeBookFromLibrary);

module.exports = router;