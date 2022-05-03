const express = require('express')
const router = express.Router()
const Authadmin = require('../controller/Authadmin')

const { route } = require('./router')
route.post('/register', Authadmin.register)
route.post('/login', Authadmin.login)
module.export = router
