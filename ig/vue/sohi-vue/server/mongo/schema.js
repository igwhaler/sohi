var mongoose = require('mongoose')

var dataSchema = new mongoose.Schema({
  name: String
})

module.exports = {
  dataSchema
}
