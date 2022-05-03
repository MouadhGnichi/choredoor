const axios = require('axios')

exports.homeRoutes = (req, res) => {
  // Make a get request to api/admin
  axios.get('http://localhost:3000/api/admin')
    .then(function (response) {
      res.render('index', { admin: response.data })
    })
    .catch(error => {
      res.send(error)
    })
}
exports.add_admin = (req, res) => {
  res.render('add_admin')
}
