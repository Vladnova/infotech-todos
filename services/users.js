const { User } = require('../models');

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

const getOne = filter => {
  return User.findOne(filter);
};

const add = ({ email, password,isAdmin }) => {
  
  const newUser =(email===ADMIN_EMAIL&&password===ADMIN_PASSWORD)
  ?new User({ email,isAdmin })
  :new User({ email});

  newUser.setPassword(password);
  return newUser.save();
};

module.exports = {
  getOne,
  add,
};
