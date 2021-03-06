const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    //arrow function as a callback
    //the refresh token allows us to periodically refresh the access token so that it doesnt expire
     async (accessToken, refreshToken, profile, done) => {
      //check if if record already exists, returns a promise
      const existingUser = await User.findOne({googleID: profile.id})

      if(existingUser) {
        //we already have that existing user
        done(null, existingUser);
      } else {
        //.save takes the model instance and saves it to the database for us
        const user = await new User({ googleID: profile.id}).save();
        done(null, user);
      }
    }
  )
);
