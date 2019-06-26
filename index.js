const express = require('express')
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//since heroku tells us which port to use, the line below figures out which port it is
const PORT = process.env.PORT || 5000;


app.listen(PORT);
