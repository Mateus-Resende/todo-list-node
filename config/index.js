let configValus = require('./index')

module.exports = {
  getDbConnectionString: function () {
    const host = process.env.MONGO_DB_HOST
    const port = process.env.MONGO_DB_PORT
    const db_name = process.env.MONGO_DB_NAME
    return `mongodb://${host}:${port}/${db_name}`
  }
}
