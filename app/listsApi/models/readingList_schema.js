const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: mongoose.model('user')
    },
    bookId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: mongoose.model('book')
    }
});

mongoose.model('readinglist', readingListSchema);