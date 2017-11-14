const mongoose = require('mongoose');

const coverImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    }
});

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    coverImage: [coverImageSchema],
    catchphrase: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ISBN: {
        type: String
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
});

mongoose.model('book', bookSchema);