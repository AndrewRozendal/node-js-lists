'use strict';

const booksList = function(req, res){
    res.render('index', { title: 'Rozendal Book Lists'});
}

const bookDetails = function(req, res){
    res.render('book-details', { title: 'Book Details'});
}

const addBookToLibrary = function(req, res){
    res.render('add-book-to-library', { title: 'Add a Book to the Library'});
}

const removeBookFromLibrary = function(req, res){
    res.render('remove-book-from-library', { title: 'Remove a Book from the Library'});
}

const readingList = function(req, res){
    res.render('reading-list', { title: 'Your Reading List'});
}

module.exports = {
    booksList,
    bookDetails,
    addBookToLibrary,
    removeBookFromLibrary,
    readingList,
};