const express = require('express')
const route = express.Router()

const services = require('../services/renderadmin ')
const controller = require('../controller/conntrolleradmin')
/*
 * @description Root Router
 * @method Get /

*/
route.get('/', services.homeRoutes)
/*
 * @description add admin
 * @method Get / add-admin

*/
route.get('/add-admin', services.add_admin)
// API
route.post('/api/admin', controller.create)
route.get('/api/admin', controller.find)
module.exports = route
