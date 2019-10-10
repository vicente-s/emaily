const mongoose = require('mongoose');

const { Schema } = mongoose;
// can be rewritten as {Schema} = mongoose; ES6 destructering

//describes all the different proprties we have
const userSchema = new Schema({
  googleID : String,
  credits: { type: Number, default: 0}
})

mongoose.model('users', userSchema);
