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

  prenom: String,
  mobile: String
})
const Comptedb = mongoose.model('comptedb', schema)
module.exports = Comptedb
