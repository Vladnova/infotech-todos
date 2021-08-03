const { Schema} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],    
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  isAdmin:{
    type:Boolean,
    default: false
  }
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = userSchema;
