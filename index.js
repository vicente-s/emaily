const express = require('express');
const app = express();

// this entire code, app.get, is a route handler
app.get('/', (req, res) => {
  res.send({ bye: 'buddy'});
});

//since heroku tells us which port to use, the line below figures out which port it is
const PORT = process.env.PORT || 5000;


app.listen(PORT);
