const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const app = express()
const clients = require('./server/routes/router')
const admin = require('./server/routes/routeradmin')
const comptes = require('./server/routes/routercompte')
const device = require('./server/routes/routerdevice')
const soc = require('./server/routes/routersoc')
dotenv.config({ path: 'config.env' })

// log requests
// app.use(morgan('tiny'))

// mongodb connection
connectDB()
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))
// set views engine
app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, ' views/ejs'))

// load assets
// app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
// app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
// app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// load routes
// app.use('/', require('./server/routes/router'))

app.use('/api/socanalyseur', soc);
app.use('/api/devices', device);
app.use('/api/comptes', comptes);
app.use('/api/admin', admin);
app.use('/api/clients', clients);


// app.get('/', (req, res) => {
//   res.render('index')
// })
// app.get('/add-client', (req, res) => {
//   res.render('add_client')
// })
// app.get('/update-client', (req, res) => {
//   res.render('update_client')
// })
// app.get('/add-admin', (req, res) => {
//   res.render('add_admin')
// })
// app.get('/add-socanalyseur', (req, res) => {
//   res.render('add_socanalyseur')
// })
// app.get('/add-compte', (req, res) => {
//   res.render('add_compte')
// })
// app.get('/update-compte', (req, res) => {
//   res.render('update_compte')
// })
// app.get('/add-device', (req, res) => {
//   res.render('add_device')
// })
// app.get('/update-device', (req, res) => {
//   res.render('update_device')
// })

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})
