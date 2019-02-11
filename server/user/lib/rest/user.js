const User = require('../../user')
const Joi = require('joi')
const Boom = require('boom')
const bcrypt = require('bcrypt')

module.exports = [
  {
    method: 'POST',
    path: '/user',
    options: {
      validate: {
        payload: {
          firstName: Joi.string().min(2),
          lastName: Joi.string().min(2),
          password: Joi.string().min(6),
          username: Joi.string().min(3)
        }
      }
    },
    handler: async (request) => {
      const userParams = {
        firstName = request.payload.firstName,
        lastName = request.payload.lastName,
        password = User.encryptPassword(request.payload.password),
        username = request.payload.username
      }

      return User.create(userParams)
        .then((user) => {
          return { message: 'created', user }
        })
        .catch((err) => Boom.badRequest(err))
    }
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: async (request) => {
      return User.findById(request.params.id)
        .then((user) => {
          return { user }
        })
        .catch((err) => Boom.notFound(err))
    }
  },
  {
    method: 'POST',
    path: '/user/login',
    options: {
      validate: {
        payload: {
          username: Joi.string().min(3),
          password: Joi.string().min(6)
        }
      }
    },
    handler: async (request) => {
      const { username, password } = request.payload
      return User.findOne({username: username})
        .select('+password')
        .exec(function (err, user) {
          if (err) return Boom.notFound(err)
          bcrypt.compare(password, user.password)
            .then((res) => {
              if (res) return { }
            })
        })
    }
  }
]
