const express = require('express')
const route = express.Router()

const services = require('../services/renderadmin ')
const controller = require('../controller/conntrolleradmin')
const Authadmin = require('../controller/Authadmin')

route.get('/', services.homeRoutes)
/*
 * @description add admin
 * @method Get / add-admin

*/
route.get('/add-admin', services.add_admin)
// API
// route.post('/api/admin', controller.create)
// route.get('/api/admin', controller.find)

route.post('/register', Authadmin.register)
route.post('/login', Authadmin.login)


module.exports = route
