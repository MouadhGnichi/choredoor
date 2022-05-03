const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String
  },
  adresse: String
})
const Admindb = mongoose.model('admindb', schema)
module.exports = Admindb
