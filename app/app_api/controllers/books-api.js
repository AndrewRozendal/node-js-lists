'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');
const userModel = mongoose.model('user');
const readingListModel = mongoose.model('readinglist');

const booksListByName = function (req, res){
    bookModel.find({}, {title: 1, coverImage: 1, catchphrase: 1, author: 1, ISBN: 1, rating: 1}).sort({'title': 1}).exec( function(err, books) {
        //CASE: error object returned
        if(err){
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
    //currently only one user so just findOne on users temporarily
    //look up ID of test user
    //TODO: accept POST parameter instead in future
    userModel.findOne({}, { _id: 1 }).exec(function(err, user){
        if(!user){
            res
                .status(404)
                .json({
                    "message": "no users found"
                });
            return;
        } else if(err){
            res
                .status(404)
                .json(err);
            return;
        //CASE: successful query
        } else {
            // now find all books that this user has in readinglist
            readingListModel.find({userId: user._id}, {bookId: 1})
            .exec(function(err, bookIDs){
                if(!bookIDs){
                    res
                        .status(404)
                        .json({
                            "message": "no bookIDs found"
                        });
                    return;
                } else if(err){
                    res
                        .status(404)
                        .json(err);
                    return;
                //CASE: successful query
                } else {
                    // transform bookIDs from array with key value pairs to just array for easy iteration for db
                    let ids = [bookIDs.length];
                    for (let i = 0; i < bookIDs.length; i++){
                        ids[i] = bookIDs[i].bookId;
                    }
                    // now grab all those book details and return as array
                    bookModel.find({ _id: {$in: ids}}, {title: 1, coverImage: 1, catchphrase: 1, author: 1, ISBN: 1, rating: 1}).sort({'title': 1}).exec( function(err, books) {
                        //CASE: error object returned
                        if(err){
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
                }
            });
        }
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