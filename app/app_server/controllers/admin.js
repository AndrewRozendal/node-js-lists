'use strict';
const auth = require('basic-auth');
const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000/api/'
};

if(process.env.NODE_ENV === 'production'){
  apiOptions.server = 'http://rozendal-lists.deploy.cs.camosun.bc.ca/api/'
}

const admin = function(req, res) {
  let credentials = auth(req);
  // if(!credentials || credentials.name !== 'testUser'  || credentials.pass !== 'encryptedPassword'){ //TODO: FOR NOW WE WILL JUST ASSUME ALLOWED
  if(!true){
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.render('./admin/dashboard', { 
      title: 'Admin - Dashboard',
      content: 'Admin content goes here',
      sideContent: "Info on how to use page here",
      buttons: [{
        url: "/admin/add-book-to-library",
        name: "Add a Book To the Library"
      },
      {
        url: "/admin/remove-book-from-library",
        name: "Remove a Book From the Library"
      }]
    });
  }
};

const addBookToLibrary = function(req, res) {
    res.render('./admin/add-book-to-library', { 
      pageHeader: {
        title: 'Admin - Add a New Book to the Library',
        tagline: 'Form',
      },
      sideContent: "Info on how to use page here",
      BookColumns: [{
        columnName: "title",
        displayName: "Title",
        type: "text"
      },
      {
        columnName: "coverImage",
        displayName: "Book Cover Image",
        type: "text"
      },
      {
        columnName: "altText",
        displayName: "Image Alt Text",
        type: "text"
      },
      {
        columnName: "catchPhrase",
        displayName: "Catch Phrase",
        type: "text"
      },
      {
        columnName: "author",
        displayName: "Author",
        type: "text"
      },
      {
        columnName: "ISBN",
        displayName: "ISBN",
        type: "text"
      },
    {
      columnName: "detailedDescription",
      displayName: "Detailed Description",
      type: "text"
    }],
      bookTemplate: {
        title: ' ',
        coverImage: {
            image: ' ',
            altText: ' '
        }, 
        catchphrase: ' ',
        author: ' ',
        ISBN: ' ',
        rating: ' ',
        detailedDescription: ' '
      }
    });
};

// Linked with renderRemoveBookPage
const removeBookFromLibrary = function(req, res){
  //Request
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: '/books',
    method: 'GET',
    json: {}
  };

  request(reqOptions, function(err, apiRes, apiResBody){
    renderRemoveBookPage(req, res, apiResBody);
  });
}

const renderRemoveBookPage = function(req, res, data) {
    res.render('./admin/remove-book-from-library', { 
      pageHeader: {
        title: 'Admin - Remove Book From Library',
        tagline: 'Library Contents',
      },
      sideContent: "Info on how to use page here",
      books: data
  });
};

module.exports = {
    admin,
    addBookToLibrary,
    removeBookFromLibrary,
};