const logout = (_, res, __) => {
  res.clearCookie('Token');
  res.status(204).json({
    status: 'success',
    code: 204,
  });
  // return res.redirect('/login');
};

module.exports = logout;
