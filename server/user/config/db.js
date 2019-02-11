const mongoose = require('mongoose')

mongoose.connect('mongodb://db:27017/test')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db
