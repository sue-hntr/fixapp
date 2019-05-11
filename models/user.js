const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// mongoose.promise = Promise

var userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: 'Two users cannot share the same username ({VALUE})',
      required: true,
      trim: true
    },
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    isStaff: {
      type: Boolean,
      default: false,
      required: true
    }
});


userSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if (err){
      return next(err);
    }
    user.password = hash;
    next();
  })
});


const User = mongoose.model("User", userSchema);
module.exports = User;

