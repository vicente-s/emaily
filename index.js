const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log('access token');
    }
  )
);


app.get(
  '/auth/google',
    passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);


//since heroku tells us which port to use, the line below figures out which port it is
const PORT = process.env.PORT || 5000;


app.listen(PORT);
