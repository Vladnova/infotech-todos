const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./configs/config-passport');


const { todoRouters, userRouters } = require('./routes');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/todos', todoRouters);
app.use('/users', userRouters);

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((err, _, res, __) => {
  const { code = 500, message = 'Server error' } = err;
  res.status(500).json({
    status: 'fail',
    code,
    message,
  });
});

module.exports = app;
