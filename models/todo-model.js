const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  todo: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  },
  hasAttachment: {
    type: Boolean,
    default: false
  }
})

const Todos = mongoose.model('Todos', todoSchema)

module.exports = Todos
