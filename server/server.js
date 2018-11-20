const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./models/user.model.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const session = require('express-session');
const http = require('http');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:"session",resave:true,saveUninitialized:false}))
app.use(passport.initialize());
app.use(passport.session());

var routes = require('./routes/routes');
app.use('/',routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
    res.send(JSON.stringify({
        message: err.message,
        error: {}
    }));
});

var server = http.createServer( app );
app.set( 'server', server );

module.exports = app;