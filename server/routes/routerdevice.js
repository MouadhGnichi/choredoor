const express = require('express')
const route = express.Router()

const services = require('../services/renderdevice')
const controller = require('../controller/controllerdevice')
/*
 * @description Root Router
 * @method Get /

*/
route.get('/', services.homeRoutes)
/*
 * @description add devices
 * @method Get / add-device

*/
route.get('/add-device', services.add_device)
/*
 * @description update devices
 * @method Get /  update-device

*/
route.get('/update-device', services.update_device)
// API
route.post('/api/devices', controller.create)
route.get('/api/devices', controller.find)
route.put('/api/devices/:id', controller.update)
route.delete('/api/devices/:id', controller.delete)

module.exports = route
