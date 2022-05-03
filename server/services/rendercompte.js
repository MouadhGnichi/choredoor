const axios = require('axios')

exports.homeRoutes = (req, res) => {
  // Make a get request to api/comptes
  axios.get('http://localhost:3000/api/comptes')
    .then(function (response) {
      res.render('index', { comptes: response.data })
    })
    .catch(error => {
      res.send(error)
    })
}
exports.add_compte = (req, res) => {
  res.render('add_compte')
}
exports.update_compte = (req, res) => {
  axios.get('http://localhost:3000/api/comptes', { params: { nom: req.query.nom } })
    .then(function (comptedata) {
      res.render('update_compte', { compte: comptedata.data })
    })
    .catch(error => {
      res.send(error)
    })
}
