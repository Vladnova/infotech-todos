const Joi = require('joi');

const create = (req, res, next) => {
  const createUserRules = Joi.object({
    title: Joi.string().required(),
    text: Joi.string(),
  });

  const result = createUserRules.validate(req.body);
  if (result.error) {
    return res.status(400).send({ message: 'missing required title field' });
  }
  next();
};

const update = (req, res, next) => {
  const updateUserRules = Joi.object({
    title: Joi.string(),
    text: Joi.string(),
  }).min(1);
  const resultUpdate = updateUserRules.validate(req.body);
  if (resultUpdate.error) {
    return res.status(400).json({ message: 'missing fields' });
  }
  next();
};

const loginAndSignup = (req, res, next) => {
  const loginUserRules = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .trim()
      .required(),
    password: Joi.string().required(),
    token: Joi.string(),
    userId: Joi.string(),
  });

  const result = loginUserRules.validate(req.body);
  if (result.error) {
    return res.status(400).send({ message: 'email must be a valid email' });
  }

  next();
};


module.exports = {
  create,
  update,
  loginAndSignup,
};
