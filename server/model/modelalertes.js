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
  nom: {
    type: String
  },

  pays: {
    type: String
  },

  adresse: {
    type: String
  }
})
const Alertesdb = mongoose.model('alertesdb ', schema)
module.exports = Alertesdb
