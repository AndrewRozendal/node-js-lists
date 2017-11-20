const mongoose = require('mongoose');
const dbURI = 'mongodb://mongo/rozendal-lists';
mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:' + error);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

//require('./book_schema');