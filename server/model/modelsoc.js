const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String
  }
})
const Socanalyseurdb = mongoose.model('socanalyseurdb', schema)
module.exports = Socanalyseurdb
