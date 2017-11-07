'use strict';

const admin = function(req, res) {
  res.render('./admin/dashboard', { 
    title: 'Admin - Dashboard',
    content: 'Admin content goes here',
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
      title: 'Admin - Add Book To Library',
    });
};

const removeBookFromLibrary = function(req, res) {
    res.render('./admin/remove-book-from-library', { 
      title: 'Admin - Remove Book From Library',
    });
};

module.exports = {
    admin,
    addBookToLibrary,
    removeBookFromLibrary,
};