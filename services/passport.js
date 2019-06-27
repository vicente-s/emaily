const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    //arrow function as a callback
    //the refresh token allows us to periodically refresh the access token so that it doesnt expire
    (accessToken, refreshToken, profile, done) => {
      //.save takes the model instance and saves it to the database for us
      new User({ googleID: profile.id}).save()
    }
  )
);
