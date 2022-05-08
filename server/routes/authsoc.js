const express = require('express')
const router = express.Router()
const Authsoc = require('../controller/Authsoc')

router.post('/register', Authsoc.register)
router.post('/login', Authsoc.login)

export default router;
