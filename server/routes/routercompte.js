const express = require('express')
const route = express.Router()

const services = require('../services/rendercompte')
const controller = require('../controller/controllercompte')
/*
 * @description Root Router
 * @method Get /

*/
route.get('/', services.homeRoutes)
/*
 * @description add comptes
 * @method Get / add-compte

*/
route.get('/add-compte', services.add_compte)
/*
 * @description update comptes
 * @method Get /  update-compte

*/
route.get('/update-compte', services.update_compte)
// API
route.post('/api/comptes', controller.create)
route.get('/api/comptes', controller.find)
route.put('/api/comptes/:nom', controller.update)
route.delete('/api/comptes/:nom', controller.delete)

module.exports = route
