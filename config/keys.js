//figure out what set of credentials to return
if (process.env.NODE_ENV === 'prodcution') {
  //if we're in production, return production keys
  module.exports = require('./prod');
} else {
  //return the dev keys
  module.exports = require('./dev');
}
