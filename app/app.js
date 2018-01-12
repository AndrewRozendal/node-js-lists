'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const subdomain = require('express-subdomain');

require('./app_api/models/db');
const listRouter = require('./app_server/routes/list_router');
const apiRouter = require('./app_api/routes/api_router');
const eportfolioRouter = require('./app_server/routes/eportfolio_router');
const capstoneRouter = require('./capstoneEPortfolio/routes/capstoneRouter');

const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'app_server', 'views'), path.join(__dirname, 'capstoneEPortfolio', 'views')]);
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'capstoneEPortfolio', 'public')));

app.use(subdomain('lists', listRouter));
app.use(subdomain('capstone', capstoneRouter));
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
  if(req.subdomains[0] == 'capstone'){
    res.render('capstoneError');
  } else {
    res.render('error');
  }
});

module.exports = app;
