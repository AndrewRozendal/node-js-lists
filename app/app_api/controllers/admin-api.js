'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');

const checkCredentials = function(req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

const getAdminDashboard = function (req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

const addBookToLibrary = function (req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

const removeBookFromLibrary = function (req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

//- export all functions for use by routes
module.exports = {
    checkCredentials,
    getAdminDashboard,
    addBookToLibrary,
    removeBookFromLibrary
};