db.books.save({
    title: 'The Art of War',
    coverImage: {
        _id: ObjectId(),
        image: '/images/artOfWar.jpg',
        altText: 'Art of War Book Cover'
    }, 
    catchphrase: 'A timeless classic on warfare',
    author: 'Sun Tzu',
    ISBN: '0981162614',
    rating: 5,
    detailedDescription: 'Additional details are in this section.  This should not appear on the home page'
});

db.books.save({
    title: 'The Iliad',
    coverImage: {
        _id: ObjectId(),
        image: '/images/theIliad.jpg',
        altText: 'The classic poem by Homer'
    }, 
    catchphrase: 'Tells the story of the Trojan War',
    author: 'Homer trans. Robert Fagles',
    ISBN: '0140275363',
    rating: 5,
    detailedDescription: 'Additional details are in this section.  This should not appear on the home page'
});

db.books.save({
    title: 'War and Peace',
    coverImage: {
        _id: ObjectId(),
        image: '/images/warAndPeace.jpg',
        altText: 'War and Peace Book Cover'
    }, 
    catchphrase: 'Tolstoy\'s masterwork on Napoleon\s invasion of Russia in 1812',
    author: 'Leo Tolstoy trans. Richard Peaver, Larissa Volokhonsky',
    ISBN: '1400079985',
    rating: 5,
    detailedDescription: 'Additional details are in this section.  This should not appear on the home page'
});

db.books.save({
    title: 'Nineteen Eighty-four',
    coverImage: {
        _id: ObjectId(),
        image: '/images/nineteenEightyFour.jpg',
        altText: 'Nineteen Eighty-Four Book Cover'
    }, 
    catchphrase: 'A Dystopian future where War is Peace and Big Brother reigns supreme',
    author: 'George Orwell',
    ISBN: '1788282361',
    rating: 5,
    detailedDescription: 'Additional details are in this section.  This should not appear on the home page'
});

db.users.save({
    userName: 'testUser',
    password: 'encryptedPassword',
    email: 'test@foo.foo'
})