'use strict';

const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000/api/'
};

if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'http://rozendal-list.deploy.cs.camosun.bc.ca/api/'
}

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

const bookDetails = function(req, res){
    res.render('./books/book-details', { 
        title: 'Book Details',
        pageHeader: {
            title: 'Book Details',
            tagline: 'Additional information',
        },
        book: {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        }
    });
}

const readingList = function(req, res){
    res.render('./books/reading-list', {
        title: 'Your Reading List',
        pageHeader: {
            title: 'Your Reading List',
            tagline: 'Manage Your Reading List',
        },
        sideContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non neque nec vulputate. Maecenas et sagittis nunc, ut accumsan ipsum. In eros sem, convallis rutrum interdum dignissim, viverra sit amet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis diam et nibh laoreet, id sagittis mi elementum. Maecenas eget ex sodales, luctus libero et, laoreet sapien.  Aenean dignissim euismod fringilla. Sed id maximus libero.',
        books: [{
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        }]
    });
}

module.exports = {
    booksList,
    bookDetails,
    readingList,
};