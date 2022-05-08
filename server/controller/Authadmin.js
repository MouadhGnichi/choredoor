// const admin = require('../model/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const Admindb = require('../model/modeladmin ')

exports.register = async (req, res) => {
  // const { email, password, status, adresse } = req.body
  // console.log('password', req.body)
  const adminExists = await Admindb.findOne(req.body.email)
  console.log(req.body)
  if (adminExists) {
    res.status(400)
    throw new Error("Admin Already exists")
  }

  const admin = await Admindb.create({
    email: req.body.email,
    status: req.body.status,
    pays: req.body.pays,
    adresse: req.body.adresse,
    password: bcrypt.hashedPass
  })

  if (admin) {
    res.status(201).json({
      message: 'Admin Added Successfully!'
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await Admindb.findOne({ email })
  // if (!user) {
  //   return res.status(400).json({ message: " Utilisateur n'existe pas " })
  // }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Mot de passe incorrecte' })
  }

  if (user && isMatch) {
    res.json({
      _id: user._id,
      // nom: user.nom,
      email: user.email,
      password: user.password
      // isAdmin: user.isAdmin,
      // token: generateToken(user._id),
    })
  } else {
    res.status(401).json({ message: 'email ou mot de passe incorrect' })
  }
}

