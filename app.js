'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const server = require('http').Server(app);

const routes =  require('./routes.js')();

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));

//allow cors
app.use(cors());

// bind main router here.
app.use('/', routes);

//Error handling code below:-

/// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler - will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {

        /* istanbul ignore next */
        res.status(err.status || 500);
        res.send({
            error: err,
            errorMsg:err.message
        });
    });
}

// production error handler - no stacktraces leaked to user
app.use((err, req, res, next) => {

    /* istanbul ignore next */
    res.status(err.status || 500);
    res.send({
        errorMsg:err.message
    });
});

/* istanbul ignore next */
process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = { server, app } ;