'use strict';

const booksList = function(req, res){
    res.render('index', { 
        title: 'Rozendal Book Lists',
        pageHeader: {
            title: 'Rozendal Book Lists',
            tagline: 'Add a Book to Your Reading List',
        },
        sideContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non neque nec vulputate. Maecenas et sagittis nunc, ut accumsan ipsum. In eros sem, convallis rutrum interdum dignissim, viverra sit amet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis diam et nibh laoreet, id sagittis mi elementum. Maecenas eget ex sodales, luctus libero et, laoreet sapien.  Aenean dignissim euismod fringilla. Sed id maximus libero.',
        books: [{
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        }]
    });
};

const bookDetails = function(req, res){
    res.render('book-details', { 
        title: 'Book Details',
        book: {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        }
    });
}

const addBookToLibrary = function(req, res){
    res.render('add-book-to-library', { title: 'Add a Book to the Library'});
}

const removeBookFromLibrary = function(req, res){
    res.render('remove-book-from-library', { title: 'Remove a Book from the Library'});
}

const readingList = function(req, res){
    res.render('reading-list', {
        title: 'Your Reading List',
        pageHeader: {
            title: 'Your Reading List',
            tagline: 'Manage Your Reading List',
        },
        sideContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non neque nec vulputate. Maecenas et sagittis nunc, ut accumsan ipsum. In eros sem, convallis rutrum interdum dignissim, viverra sit amet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis diam et nibh laoreet, id sagittis mi elementum. Maecenas eget ex sodales, luctus libero et, laoreet sapien.  Aenean dignissim euismod fringilla. Sed id maximus libero.',
        books: [{
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        },
        {
            title: 'The Art of War',
            coverImage: {
                image: '/images/artOfWarCover.jpg',
                altText: 'Art of War Book Cover'
            }, 
            catchphrase: 'A timeless classic on warfare',
            author: 'Sun Tzu',
            ISBN: '34252353-34234-234234',
            rating: '5/5'
        }]
    });
}

module.exports = {
    booksList,
    bookDetails,
    addBookToLibrary,
    removeBookFromLibrary,
    readingList,
};