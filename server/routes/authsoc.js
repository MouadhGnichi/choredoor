const express = require('express')
const router = express.Router()
const Authsoc = require('../controller/Authsoc')

const { route } = require('./router')
route.post('/register', Authsoc.register)
route.post('/login', Authsoc.login)
module.export = router
