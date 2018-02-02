'use strict';

const express = require('express');
const router = express.Router();
const eportfolioController = require('../controllers/ePortfolio');
const constructionController = require('../controllers/construction');

// // currently under construction so only serve pages if development
// if(process.env.NODE_ENV === 'production'){
//     router.get('*', constructionController.home);
// } else {
// }

/* -- E-Portfolio Pages -- */
/* GET home page */
router.get('/', eportfolioController.home);
/* GET resume page */
router.get('/resume', eportfolioController.resume);

// If we hit here, throw 404 error
router.get('*', function(req, res, next){
    //res.status(404).send('ERROR')
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
