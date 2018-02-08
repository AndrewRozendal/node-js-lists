'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const subdomain = require('express-subdomain');

require('./listsApi/models/db');

const listRouter = require('./lists/routes/list_router');
const apiRouter = require('./listsApi/routes/api_router');
const eportfolioRouter = require('./ePortfolio/routes/eportfolio_router');

const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'ePortfolio', 'views'), path.join(__dirname, 'lists', 'views')]);
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(subdomain('lists', listRouter));
app.use('/api', apiRouter);
app.use('/', eportfolioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  // serve appropriate error page depending on subdomain 
  // - check for both 
  // subdomain.andrewrozendal.ca and
  // api.subdomain.andrewrozendal.ca
  console.log(req.subdomains);
  if(req.subdomains[0] == 'lists' || req.subdomains[1] == 'lists'){
    res.render('listsError');
  } else {
    res.render('ePortfolioError');
  }
});

module.exports = app;
