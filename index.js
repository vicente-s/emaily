const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

require('./services/passport');

mongoose.connect(keys.mongoURI)
const app = express();

require('./routes/authRoutes')(app);

//since heroku tells us which port to use, the line below figures out which port it is
const PORT = process.env.PORT || 5000;


app.listen(PORT);
