const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')
/*
 * @description Root Router
 * @method Get /

*/
route.get('/', services.homeRoutes)
/*
 * @description add clients
 * @method Get / add-client

*/
route.get('/add-client', services.add_client)
/*
 * @description update clients
 * @method Get /  update-client

*/
route.get('/update-client', services.update_client)
// API
route.post('/api/clients', controller.create)
route.get('/api/clients', controller.find)
route.put('/api/clients/:id', controller.update)
route.delete('/api/clients/:id', controller.delete)

module.exports = route
