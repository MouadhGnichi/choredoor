const admin = require('../model/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const Admindb = require('../model/model')
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }
  })
  const admin = new Admindb({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    status: req.body.status,
    pays: req.body.pays,
    adresse: req.body.adresse,
    password: bcrypt.hashedPass
  })()
  admin.save()
    .then(admin=> {
      res.json({
        message: 'Admin Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })

const login = (req, res, next) => {
  const adminid = req.body.adminid
  const password = req.body.password
  admin.findOne({ $or: [{ email: adminid}, { adresse: adminid }, { status:adminid }] })
    .then(admin => {
      admin
        ? bcrypt.compare(password, admin.password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {
              const token = jwt.sign({ id: admin.id }, 'verySecretValue', { expiresIn: '1h' })
              res.json({
                message: 'login successful!',
                token
              })
            } else {
              res.json({
                message: 'password does not matched!'
              })
            }
          })
        : res.json({
          message: 'No user found!'
        })
    })
}
module.exports = {
  register,
  login
}