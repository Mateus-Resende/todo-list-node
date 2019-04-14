const Todo = require('../../models/todo-model')

describe('Validating the attributes', () => {
  let todo

  beforeEach(() => {
    todo = new Todo({
      username: 'test',
      todo: 'wash the car'
    })
  })

  describe('username', () => {
    it('is required', () => {
      todo.username = null
      const error = todo.validateSync()
      expect(error.errors['username']).toBeDefined()
      expect(error.errors['username'].message).toMatch(/username.+is.+required/)
    })
  })

  describe('todo', () => {
    it('is required', () => {
      todo.todo = null
      const error = todo.validateSync()
      expect(error.errors['todo']).toBeDefined()
      expect(error.errors['todo'].message).toMatch(/todo.+is.+required/)
    })
  })

  describe('isDone', () => {
    it('is not required', () => {
      todo.isDone = null
      const error = todo.validateSync()
      expect(error).toBeUndefined()
    })
  })

  describe('hasAttachment', () => {
    it('is not required', () => {
      todo.hasAttachment = null
      const error = todo.validateSync()
      expect(error).toBeUndefined()
    })
  })
})
