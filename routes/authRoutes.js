const passport = require('passport');

//were exporting a function from this file
module.exports = app => {

  //first argument is the path we want to handle, the scope gets access to specific [arts of the users account
  app.get(
    '/auth/google',
      passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // after user gets code from google to turn into a profile
  app.get(
    '/auth/google/callback',
      passport.authenticate('google')
    );

  app.get('/api/logout', (req, res) => {
    req.logout();
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

}
