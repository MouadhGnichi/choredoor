const Comptedb = require('../model/modelcompte')
// create and save new compte
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can be not empty!' })
    return
  }

  // new compte
  const compte = new Comptedb({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    nom: req.body.nom,
    mobile: req.body.mobile,
    prenom: req.body.prenom
  })

  // save compte in the database
  compte
    .save(compte)
    .then(data => {
      // res.send(data)
      res.redirect('/add-compte')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating a create operation'
      })
    })
}
// retrive and return all comptes
exports.find = (req, res) => {
  Comptedb.find()
    .then(compte => {
      res.send(compte)
    })
    .catch(Error => {
      res.status(500).send(
        { message: Error.message || ' Error Occured while retriving compte information' })
    })
}
// update and identified compte by compte id-client
exports.update = (req, res) => {
  if (!res.body) {
    return res
      .status(400)
      .send(('message:Data  to update can not be empty '))
  }
  const id = req.params.id
  Comptedb.findBlydAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update use with$(nom).Maybe compte not found!'
        })
      } else {
        res.send(data)
      }
    })
    .catch(Error => {
      res.status(500).send({
        message: 'Error Update.compte information'
      })
    })
}
// Delete a compte with specified compte nom in the request
exports.delete = (req, res) => {
  const nom = req.params.nom
  Comptedb.findBlydAndDelete(nom)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Cannot Delete with nom$(nom).Maybe nom is wrong' })
      } else {
        res.send({
          message: 'Compte was deleted successfully'
        })
      }
    })
    .catch(Error => {
      res.status(500)
        .send({ message: 'Could not delete Compte with nom' })
    })
}
