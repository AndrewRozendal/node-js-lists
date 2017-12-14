const mongoose = require('mongoose');

const readingList_schema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    bookID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    } 
});

mongoose.model('readingList', readingList_schema);