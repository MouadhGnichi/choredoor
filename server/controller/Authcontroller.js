const client = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const Clientdb = require('../model/model')

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }
  })
  const client = new Clientdb({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    nom: req.body.nom,
    pays: req.body.pays,
    adresse: req.body.adresse,
    password: bcrypt.hashedPass
  })()
  client.save()
    .then(client => {
      res.json({
        message: 'Client Added Successfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
}

const login = (req, res, next) => {
  const clientnom = req.body.clientnom
  const password = req.body.password
  client.findOne({ $or: [{ email: clientnom }, { adresse: clientnom }, { pays: clientnom }, { id: clientnom }] })
    .then(client => {
      client
        ? bcrypt.compare(password, client.password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
          if (result) {
            const token = jwt.sign({ nom: client.nom }, 'verySecretValue', { expiresIn: '1h' })
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

export {
  register,
  login
}