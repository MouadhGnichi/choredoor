const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const AdminSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //    required: true
  // },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // required: true,
    // unique: true
  },
  status: {
    type: String
  },
  pays: {
    type: String
  },
  adresse: {
    type: String
  }
})

AdminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Admindb = mongoose.model('AdminSchema', AdminSchema)
module.exports = Admindb
