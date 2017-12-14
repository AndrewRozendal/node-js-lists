'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');
const readingListModel = mongoose.model('readingList');
const userModel = mongoose.model('user');

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
    // Issue:
    //db.readingLists.find({userID: "5a32e5c7a3bffbbfd9513739"}) -- returns nothing, even though there is a matching userID
    //> db.readingLists.find({userID: ObjectId("5a32e5c7a3bffbbfd9513739")})  -- correctly returns matching document
    //{ "_id" : ObjectId("5a32e5c7a3bffbbfd951373a"), "userID" : ObjectId("5a32e5c7a3bffbbfd9513739"), "bookID" : ObjectId("5a32e5c7a3bffbbfd9513737") }
    
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
            // //debug code
            res
            .status(200)
            .json(user);
        }
    });

    // // res.status(200).json(currentUser)

    // //TODO temp!
    // let currentUserID = "5a32e5c7a3bffbbfd9513739";
    // //query readingListModel and return all bookIDs that belong to passed user
    // let bookIDs;
    // readingListModel.find({userID : "5a32e5c7a3bffbbfd9513739"}).exec( function(err, bookIDs){
    //     if(err){
    //         res
    //             .status(404)
    //             .json(err);
    //         return;
    //     //CASE: successful query
    //     } else {
    //         res
    //             .status(200)
    //             .json(bookIDs);
    //     }
    // });

    // //query bookModel and return all book data that matches bookIDs we retrieved in prev step
    // bookModel.find({ _id: { $in: bookIDs}}, {title: 1, coverImage: 1, catchphrase: 1, author: 1, ISBN: 1, rating: 1}).sort({'title': 1}).exec( function(err, books) {
    //     //CASE: error object returned
    //     if(err){
    //         res
    //             .status(404)
    //             .json(err);
    //         return;
    //     //CASE: successful query
    //     } else {
    //         res
    //             .status(200)
    //             .json(books);
    //     }
    // });
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