const current = (req, res, _) => {
  const { email, subscription } = req.user;

  return res.json({
    status: 'success',
    code: 200,
    data: {
      result: {
        email,
        subscription,
      },
    },
  });
};

module.exports = current;
