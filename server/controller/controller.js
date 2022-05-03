const Clientdb = require('../model/model')
// create and save new client
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can be not empty!' })
    return
  }

  // new client
  const client = new Clientdb({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    nom: req.body.nom,
    pays: req.body.pays,
    adresse: req.body.adresse
  })

  // save client in the database
  client
    .save(client)
    .then(data => {
      // res.send(data)
      res.redirect('/add-client')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating a create operation'
      })
    })
}
// retrive and return all clients
exports.find = (req, res) => {
  Clientdb.find()
    .then(client => {
      res.send(client)
    })
    .catch(Error => {
      res.status(500).send(
        { message: Error.message || ' Error Occured while retriving client information' })
    })
}
// update and identified client by client id
exports.update = (req, res) => {
  if (!res.body) {
    return res
      .status(400)
      .send(('message:Data  to update can not be empty '))
  }
  const id = req.params.id
  Clientdb.findBlydAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update use with$(id).Maybe client not found!'
        })
      } else {
        res.send(data)
      }
    })
    .catch(Error => {
      res.status(500).send({
        message: 'Error Update.client information'
      })
    })
}
// Delete a client with specified  client id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Clientdb.findBlydAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Cannot Delete with id$(id).Maybe id is wrong' })
      } else {
        res.send({
          message: 'Client was deleted successfully'
        })
      }
    })
    .catch(Error => {
      res.status(500)
        .send({ message: 'Could not delete Client with id' })
    })
}
