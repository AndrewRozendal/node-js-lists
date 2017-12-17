'use strict';

const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000/api/'
};

if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'http://rozendal-lists.deploy.cs.camosun.bc.ca/api/'
}

// Linked with renderHomepage
const booksList = function(req, res){
    //Request
    const reqOptions = {
        baseUrl: apiOptions.server,
        url: '/books',
        method: 'GET',
        json: {}
    };

    request(reqOptions, function(err, apiRes, apiResBody){
        renderHomepage(req, res, apiResBody);
    });
}

const renderHomepage = function(req, res, data){
    let errorMsg = null;
    if(!(data instanceof Array)){
        errorMsg = 'API lookup error';
        data = [];
    }

    res.render('./books/index', { 
        title: 'Rozendal Book Lists',
        pageHeader: {
            title: 'Rozendal Book Lists',
            tagline: 'Add a Book to Your Reading List',
        },
        sideContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non neque nec vulputate. Maecenas et sagittis nunc, ut accumsan ipsum. In eros sem, convallis rutrum interdum dignissim, viverra sit amet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis diam et nibh laoreet, id sagittis mi elementum. Maecenas eget ex sodales, luctus libero et, laoreet sapien.  Aenean dignissim euismod fringilla. Sed id maximus libero.',
        books: data,
        errorMsg: errorMsg
    });
};

// Linked with renderDetailsPage
const bookDetails = function(req, res){
    //Request
    const reqOptions = {
        baseUrl: apiOptions.server,
        url: `/books/book-details/${req.params.bookid}`,
        method: 'GET',
        json: {}
    };

    request(reqOptions, function(err, apiRes, apiResBody){
        renderDetailsPage(req, res, apiResBody);
    });
}

const renderDetailsPage = function(req, res, data){
    let errorMsg = null;
    if(!(data instanceof Object)){
        errorMsg = 'API lookup error';
        data = {};
    }

    res.render('./books/book-details', { 
        title: 'Book Details',
        pageHeader: {
            title: 'Book Details',
            tagline: 'Additional information',
        },
        book: data,
        errorMsg: errorMsg
    });
}


// Linked with renderReadingListPage
const readingList = function(req, res){
    //Request
    const reqOptions = {
        baseUrl: apiOptions.server,
        url: `/books/reading-lists/`,
        method: 'GET',
        json: {}
    };

    request(reqOptions, function(err, apiRes, apiResBody){
        renderReadingListPage(req, res, apiResBody);
    });
}

const renderReadingListPage = function(req, res, data){
    let errorMsg = null;
    if(!(data instanceof Array)){
        errorMsg = 'API lookup error';
        data = [];
    }

    res.render('./books/reading-list', {
        title: 'Your Reading List',
        pageHeader: {
            title: 'Your Reading List',
            tagline: 'Manage Your Reading List',
        },
        sideContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non neque nec vulputate. Maecenas et sagittis nunc, ut accumsan ipsum. In eros sem, convallis rutrum interdum dignissim, viverra sit amet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis diam et nibh laoreet, id sagittis mi elementum. Maecenas eget ex sodales, luctus libero et, laoreet sapien.  Aenean dignissim euismod fringilla. Sed id maximus libero.',
        books: data,
        errorMsg: errorMsg
    });
}

module.exports = {
    booksList,
    bookDetails,
    readingList,
};