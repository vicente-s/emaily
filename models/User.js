const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// can be rewritten as {Schema} = mongoose; ES6 destructering

//describes all the different proprties we have
const userSchema = new Schema({
  googleID : String,
  name: String
})

mongoose.model('users', userSchema);
