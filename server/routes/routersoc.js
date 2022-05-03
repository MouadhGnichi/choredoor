const express = require('express')
const route = express.Router()

const services = require('../services/rendersoc')
const controller = require('../controller/controllersoc')
/*
 * @description Root Router
 * @method Get /

*/
route.get('/', services.homeRoutes)
/*
 * @description add socanalyseur
 * @method Get / add-socanalyseur

*/
route.get('/add-socanalyseur', services.add_socanalyseur)
// API
route.post('/api/socanalyseur', controller.create)
route.get('/api/socanalyseur', controller.find)
module.exports = route
