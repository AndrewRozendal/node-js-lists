const mongoose = require('mongoose');

const readingList_schema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true
    },
    bookID: {
        type: Number,
        required: true
    } 
});

mongoose.model('readingList', readingList_schema);