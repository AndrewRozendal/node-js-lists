'use strict';
const auth = require('basic-auth');

const home = function(req, res){
    res.render('./ePortfolio/home');
};

const about = function(req, res){
    res.render('./ePortfolio/about');
};

const resume = function(req, res){
    let credentials = auth(req);
    if(!credentials || credentials.name !== 'testUser'  || credentials.pass !== 'encryptedPassword'){ //TODO: FOR NOW WE WILL JUST ASSUME ALLOWED
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="example"');
      res.end('Access denied');
    } else {
      res.render('./ePortfolio/resume');
    }
};

const examples = function(req, res){
    res.render('./ePortfolio/examples');
};

const blog = function(req, res){
    res.render('./ePortfolio/blog');
};

const contact = function(req, res){
    res.render('./ePortfolio/contact');
};

module.exports = {
    home,
    about,
    resume,
    examples,
    blog,
    contact
};