'use strict';

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');
const othersController = require('../controllers/others');
const adminController = require('../controllers/admin');
const constructionController = require('../controllers/construction');

// currently under construction so only serve pages if development
if(process.env.NODE_ENV === 'production'){
    router.get('*', constructionController.home);
} else {
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

    // If we hit here, throw 404 error
    router.get('*', function(req, res, next){
        //res.status(404).send('ERROR')
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

module.exports = router;
