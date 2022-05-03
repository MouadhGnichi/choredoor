const Devicedb = require('../model/model')
// create and save new device
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can be not empty!' })
    return
  }

  // new device
  const device = new Devicedb({
    id: req.body.id,
    name: req.body.name,
    codedevice: req.body.codedevice
  })
  // save device in the database
  device
    .save(device)
    .then(data => {
      // res.send(data)
      res.redirect('/add-device')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating a create operation'
      })
    })
}
// retrive and return all devices
exports.find = (req, res) => {
  Devicedb.find()
    .then(device => {
      res.send(device)
    })
    .catch(Error => {
      res.status(500).send(
        { message: Error.message || ' Error Occured while retriving device information' })
    })
}
// update and identified device by device id
exports.update = (req, res) => {
  if (!res.body) {
    return res
      .status(400)
      .send(('message:Data  to update can not be empty '))
  }
  const id = req.params.id
  Devicedb.findBlydAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update use with$(id).Maybe device not found!'
        })
      } else {
        res.send(data)
      }
    })
    .catch(Error => {
      res.status(500).send({
        message: 'Error Update.device information'
      })
    })
}
// Delete a device with specified  device id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Devicedb.findBlydAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: 'Cannot Delete with id$(id).Maybe id is wrong' })
      } else {
        res.send({
          message: 'Device was deleted successfully'
        })
      }
    })
    .catch(Error => {
      res.status(500)
        .send({ message: 'Could not delete Device with id' })
    })
}
