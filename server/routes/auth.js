const express = require('express')
const router = express.Router()
const Authcontroller = require('../controller/Authcontroller')

const { route } = require('./router')
route.post('/register', Authcontroller.register)
route.post('/login', Authcontroller.login)
module.export = router
