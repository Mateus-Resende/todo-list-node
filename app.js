const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config')
const setupController = require('./controllers/setupController')
const apiController = require('./controllers/apiController')

const port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true })

setupController(app)
apiController(app)

app.listen(port)
