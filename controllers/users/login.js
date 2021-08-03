const { users: service } = require('../../services');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await service.getOne({ email });

    if (!user || !user.validPassword(password)) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Email or password is wrong',
      });
    };   

    const { SECRET_KEY } = process.env;

    const payload = {
      _id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY);
    res.cookie('Token', token, { maxAge: 900000 });

    res.json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: {
          email,
        },
      },
    });

    

    
  } catch (error) {
    next(error);
  }
};

module.exports = login;
