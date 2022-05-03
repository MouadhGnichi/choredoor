const Admindb = require('../model/modeladmin ')
// create and save new admin
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can be not empty!' })
    return
  }

  // new admin
  const admin = new Admindb({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status,
    adresse: req.body.adresse
  })

  // save client in the database
  admin
    .save(admin)
    .then(data => {
      // res.send(data)
      res.redirect('/add-admin')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating a create operation'
      })
    })
}
// retrive
exports.find = (req, res) => {
  Admindb.find()
    .then(admin => {
      res.send(admin)
    })
    .catch(Error => {
      res.status(500).send(
        { message: Error.message || ' Error Occured while retriving admin information' })
    })
}
