'use strict';
const mongoose = require('mongoose');
const bookModel = mongoose.model('book');

const checkCredentials = function(req, res){
    res
    .status(404)
    .json({
        "message": "check credentials Not yet implemented"
    });
};

const getAdminDashboard = function (req, res){
    res
    .status(404)
    .json({
        "message": "admin dashboard Not yet implemented"
    });
};

const addBookToLibrary = function (req, res){
    //ensure all required fields were passed values in the POST request, else reject
    if(req.body && req.body.newtitle && req.body.newcoverImage && req.body.newaltText && req.body.newcatchPhrase && req.body.newauthor){
        // TODO check for duplicates before adding? or just add?
        bookModel.create({title: req.body.newtitle,
                        coverImage: {
                            image: req.body.newcoverImage,
                            altText: req.body.newaltText
                        },
                        catchphrase: req.body.newcatchPhrase,
                        author: req.body.newauthor,
                        ISBN: req.body.newISBN,
                        detailedDescription: req.body.newdetailedDescription
                        },
                         function(err, newBook){
            if(err){
                res.status(400).json(err);
                return;
            } else {
                res.status(201).json(newBook);
                return;
            }
        });
    } else {
        res.status(404).json({"message": "bad POST request"});
        return;
    }
};

const removeBookFromLibrary = function (req, res){
    if(req.params && req.params.bookid){
        bookModel.findByIdAndRemove(req.params.bookid).exec(function(err, result){
            if(err){
                res.status(404).json(err);
                return;
            } else {
                //response is null for delete
                res.status(204).json(null);
                return;
            }
        });
    } else {
        res.status(404).json({"message": "bad DELETE request"});
        return;
    }
};

//- export all functions for use by routes
module.exports = {
    checkCredentials,
    getAdminDashboard,
    addBookToLibrary,
    removeBookFromLibrary
};