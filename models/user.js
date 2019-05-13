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

///////ADDED FROM Simple MERN Passport. This works too
// userSchema.methods = {
//   checkPassword: function (inputPassword) {
//   return bcrypt.compareSync(inputPassword, this.password)
// },
//   hashPassword: plainTextPassword => {
//   return bcrypt.hashSync(plainTextPassword, 10)
//   }
// }

// Define pre-hooks for the save method
// userSchema.pre('save', function (next) {
//   if (!this.password) {
//     console.log('models/user.js =======NO PASSWORD PROVIDED=======')
//     next()
//   } else {
//     console.log('models/user.js hashPassword in pre save');
//     this.password = this.hashPassword(this.password)
//     next()
//   }
// })
///////ADDED FROM Simple MERN Passport This works too

///////FROM Treehouse. This Works. Return if MERN doesn't
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

