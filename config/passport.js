var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Student = require('../models/student');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        //Do something
    }
));