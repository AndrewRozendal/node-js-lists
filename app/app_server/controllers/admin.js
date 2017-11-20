'use strict';

const admin = function(req, res) {
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
        rating: ' '
      }
    });
};

const removeBookFromLibrary = function(req, res) {
    res.render('./admin/remove-book-from-library', { 
      pageHeader: {
        title: 'Admin - Remove Book From Library',
        tagline: 'Library Contents',
      },
      sideContent: "Info on how to use page here",
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
};

module.exports = {
    admin,
    addBookToLibrary,
    removeBookFromLibrary,
};