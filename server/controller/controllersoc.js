const Socanalyseurdb = require('../model/modelsoc')
// create and save new socanalyseur
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can be not empty!' })
    return
  }

  // new socanalyseur
  const socanalyseur = new Socanalyseurdb({
    id: req.body.id,
    password: req.body.password,
    status: req.body.status
  })

  // save socanalyseur in the database
  socanalyseur
    .save(socanalyseur)
    .then(data => {
      // res.send(data)
      res.redirect('/add-socanalyseur')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating a create operation'
      })
    })
}
// retrive and return all socanalyseur
exports.find = (req, res) => {
  Socanalyseurdb.find()
    .then(socanalyseur => {
      res.send(socanalyseur)
    })
    .catch(Error => {
      res.status(500).send(
        { message: Error.message || ' Error Occured while retriving socanalyseur information' })
    })
}
