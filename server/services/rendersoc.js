const axios = require('axios')
exports.homeRoutes = (req, res) => {
  // Make a get request to api/socanalyseur
  axios.get('http://localhost:3000/api/socanalyseur')
    .then(function (response) {
      res.render('index', { socanalyseur: response.data })
    })
    .catch(error => {
      res.send(error)
    })
}
exports.add_socanalyseur = (req, res) => {
  res.render('add_socanalyseur')
}
