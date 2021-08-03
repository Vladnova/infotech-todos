const { Todo } = require('../../models');

const update = async (req, res, next) => {
  const { body, user,params } = req;

  try {
    const result = await Todo.findByIdAndUpdate(params.todoId, body);

    if (user.isAdmin) {
      await Todo.findByIdAndUpdate(params.todoId, body);
      return res.json({
        status: 'success',
        code: 200,
        message: 'Todo update',
      });
    }

    if (result.userId.toString() !== user._id.toString()) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }

    if (!result) {
      return res.status(400).json({
        status: 'Bad request',
        code: 400,
        message: 'Missing field favorite',
      });
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        message: 'Todo update',
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
