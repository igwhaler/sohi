var mongoose = require('mongoose')
var dataSchema = require('./schema')

module.exports = mongoose.model('dataModel', dataSchema)
