const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    unique: true
  },
  codedevice: {
    type: Infinity
  }
})
const Devicedb = mongoose.model('devicedb', schema)
module.exports = Devicedb
