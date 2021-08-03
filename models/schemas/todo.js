const { Schema} = require('mongoose');

const todoSchema = Schema({
  title: {
    type: String,
    required: [true, 'Set name for title'],
  },
  text: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = todoSchema;
