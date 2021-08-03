const { model } = require('mongoose');

const {todoSchema} = require('./schemas')

const Todo =model('todo', todoSchema);

module.exports=Todo;