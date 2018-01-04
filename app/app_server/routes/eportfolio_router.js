'use strict';

const express = require('express');
const router = express.Router();
const eportfolioController = require('../controllers/ePortfolio');

/* -- E-Portfolio Pages -- */
/* GET home page */
router.get('/', eportfolioController.home);
/* GET about page */
router.get('/about', eportfolioController.about);
/* GET resume page */
router.get('/resume', eportfolioController.resume);
/* GET examples page */
router.get('/examples', eportfolioController.examples);
/* GET blog page */
router.get('/blog', eportfolioController.blog);
/* GET contact page */
router.get('/contact', eportfolioController.contact);

module.exports = router;
