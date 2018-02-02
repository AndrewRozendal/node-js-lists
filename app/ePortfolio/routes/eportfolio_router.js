'use strict';

const express = require('express');
const router = express.Router();
const eportfolioController = require('../controllers/ePortfolio');
const constructionController = require('../controllers/construction');

// currently under construction so only serve pages if development
if(process.env.NODE_ENV === 'production'){
    router.get('*', constructionController.home);
} else {
    /* -- E-Portfolio Pages -- */
    /* GET home page */
    router.get('/', eportfolioController.home);
    /* GET resume page */
    router.get('/resume', eportfolioController.resume);
}

module.exports = router;
