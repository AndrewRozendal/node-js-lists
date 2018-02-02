'use strict';
const auth = require('basic-auth');

const ePortfolioViews = "/home/node/app/ePortfolio/views/"

const home = function(req, res){
    res.render(ePortfolioViews + "home");
};

const resume = function(req, res){
    let credentials = auth(req);
    if(!credentials || credentials.name !== 'testUser'  || credentials.pass !== 'encryptedPassword'){ //TODO: FOR NOW WE WILL JUST ASSUME ALLOWED
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="example"');
      res.end('Access denied');
    } else {
        res.render(ePortfolioViews + "resume");
    }
};

module.exports = {
    home,
    resume
};