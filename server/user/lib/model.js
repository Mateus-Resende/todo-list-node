const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  username: {
    type: String,
    index: true,
    unique: true,
    required: true
  }
})

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, process.env.SALT_ROUNDS, function(err, hash) {
    this.password = hash
    next()
  });
})

// add methods here with mongoose.methods.<method_name>

module.exports = mongoose.model('User', userSchema)
