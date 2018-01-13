'use strict';

const express = require('express');
const router = express.Router();

const booksAPIController = require('../controllers/books-api');
const othersAPIController = require('../controllers/others-api');
const adminAPIController = require('../controllers/admin-api');
const constructionController = require('../../lists/controllers/construction');

// currently under construction so only serve pages if development
if(process.env.NODE_ENV === 'production'){
    router.get('*', constructionController.home);
} else {
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

    /* -- REMOVE BOOK FROM USER READING LIST -- */
    router
        .route('/books/reading-lists/:userid')
        .delete(booksAPIController.readingListRemoveAll);



    /* -- OTHERS -- */
    /* -- ABOUT INFO -- */
    router
        .route('/about')
        .get(othersAPIController.getData);


    /* -- ADMIN -- */
    /* -- ADD A BOOK TO THE DB -- */
    router
        .route('/admin/add-book-to-library/')
        .post(adminAPIController.addBookToLibrary);

    /* -- REMOVE A BOOK FROM THE DB -- */
    router
        .route('/admin/remove-book-from-library/:bookid')
        .delete(adminAPIController.removeBookFromLibrary);

    /* -- CHECK ADMIN CREDENTIALS -- */
    // this needs to be last because /admin/:adminid will incorrrectly detect
    // /admin/add-book-to-library as an :adminid instead...
    router
        .route('/admin/:adminid')
        .post(adminAPIController.checkCredentials)
        .get(adminAPIController.getAdminDashboard);
}

module.exports = router;