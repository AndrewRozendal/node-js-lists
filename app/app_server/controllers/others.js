'use strict';

const about = function(req, res) {
  res.render('about', { title: 'About Rozendal Book Lists' });
};

module.exports = {
  about
};