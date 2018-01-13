'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');

const getData = function(req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

//- export all functions for use by routes
module.exports = {
    getData
};