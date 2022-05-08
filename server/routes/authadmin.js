const express = require('express')
const router = express.Router()
const Authadmin = require('../controller/Authadmin')

router.post('/register', Authadmin.register)
router.post('/login', Authadmin.login)

export default router;
