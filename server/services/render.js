const axios = require('axios')

exports.homeRoutes = (req, res) => {
  // Make a get request to api/clients
  axios.get('http://localhost:3000/api/clients')
    .then(function (response) {
      res.render('index', { clients: response.data })
    })
    .catch(error => {
      res.send(error)
    })
}
exports.add_client = (req, res) => {
  res.render('add_client')
}
exports.update_client = (req, res) => {
  axios.get('http://localhost:3000/api/clients', { params: { id: req.query.id } })
    .then(function (clientdata) {
      res.render('update_client', { client: clientdata.data })
    })
    .catch(error => {
      res.send(error)
    })
}
