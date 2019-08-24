const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/User');
require('./services/passport')


require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
const app = express();

app.use(
  //lets us know know long the cookie will get saved
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//since heroku tells us which port to use, the line below figures out which port it is
const PORT = process.env.PORT || 5000;


app.listen(PORT);
