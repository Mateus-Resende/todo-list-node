const { expect } = require('chai')
const User = require('./user')

describe('User', function () {
  const requiredPaths = User.schema.requiredPaths()

  requiredPaths.forEach((v) => {
    it(`should be invalid if ${v} is empty`, function (done) {
      let m = new User()

      m.validate(function (err) {
        expect(err.errors[v]).to.exist // eslint-disable-line no-unused-expressions
        done()
      })
    })
  })
})
