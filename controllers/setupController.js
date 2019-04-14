const Todos = require('../models/todoModel')

module.exports = function(app) {
  app.get('/api/setupTodos', function (req, res) {
    let starterTodos = [
      {
        username: 'test',
        todo: 'Buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn node',
        isDone: false,
        hasAttachment: false
      }
    ]

    Todos.create(starterTodos, function(err, results) {
      res.send(results)
    })
  })
}
