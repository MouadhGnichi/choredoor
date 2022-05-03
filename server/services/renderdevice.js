const axios = require('axios')

exports.homeRoutes = (req, res) => {
  // Make a get request to api/devices
  axios.get('http://localhost:3000/api/devices')
    .then(function (response) {
      res.render('index', { devices: response.data })
    })
    .catch(error => {
      res.send(error)
    })
}
exports.add_device = (req, res) => {
  res.render('add_device')
}
exports.update_device = (req, res) => {
  axios.get('http://localhost:3000/api/devices', { params: { id: req.query.id } })
    .then(function (devicedata) {
      res.render('update_device', { device: devicedata.data })
    })
    .catch(error => {
      res.send(error)
    })
}
