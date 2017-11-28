'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');

const booksListByName = function (req, res){
    bookModel.find().exec( function(err, books) {
        //CASE: bookid doesnt match anything in db
        if(!books){
            res
                .status(404)
                .json({
                    "message": "bookid not found"
                });
            return;
        //CASE: error object returned
        } else if(err){
            res
                .status(404)
                .json(err);
            return;
        //CASE: successful query
        } else {
            res
                .status(200)
                .json(books);
        }
    });
};

const booksReadOne = function (req, res){
    if(req.params && req.params.bookid){
        bookModel
        .findById(req.params.bookid)
        .exec( function(err, book) {
            //CASE: bookid doesnt match anything in db
            if(!book){
                res
                    .status(404)
                    .json({
                        "message": "bookid not found"
                    });
                return;
            //CASE: error object returned
            } else if(err){
                res
                    .status(404)
                    .json(err);
                return;
            //CASE: successful query
            } else {
                res
                    .status(200)
                    .json(book);
            }
        });
    //CASE: no param passed
    } else {
        res
            .status(404)
            .json({
                "message": "No bookid in request"
            });
    }
};

const readingListByName = function(req, res){
    res
        .status(404)
        .json({
            "message": "Not yet implemented"
        });
};

const readingListAddOne = function (req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

const readingListRemoveOne = function (req, res){
    res
    .status(404)
    .json({
        "message": "Not yet implemented"
    });
};

//- export all functions for use by routes
module.exports = {
    booksListByName,
    booksReadOne,
    readingListByName,
    readingListAddOne,
    readingListRemoveOne
};