// setup API
const Hapi = require('hapi')
const routes = require('./lib/routes/rest/user')

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
})

const init = async () => {
  await server.register({
    plugin: require('hapi-pino'),
    options: {
      logEvents: ['response', 'request']
    }
  })

  server.route(routes)
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

// setup DB
const db = require('./config/db')

db.once('open', function () {
  console.log('Database connected')
  init()
})
