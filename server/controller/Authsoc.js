const socanalyseur= require('../model/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const Socanalyseurdb = require('../model/model')
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }
  })
  const socanalyseur= new Socanalyseurdb({
    _id: new mongoose.Types.ObjectId(),
    status: req.body.status,
    password: bcrypt.hashedPass
  })()
  socanalyseur.save()
    .then(socanalyseur=> {
      res.json({
        message: 'SocAnalyseur Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })

const login = (req, res, next) => {
  const socanalyseurid = req.body.socanalyseurid
  const password = req.body.password
  admin.findOne({ $or: [ { adresse: socanalyseurid }, { status:socanalyseurid }] })
    .then(socanalyseur => {
      admin
        ? bcrypt.compare(password, socanalyseur.password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {
              const token = jwt.sign({ id: socanalyseur.id }, 'verySecretValue', { expiresIn: '1h' })
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