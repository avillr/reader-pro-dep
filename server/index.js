const path = require('path')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const compression = require('compression')
const db = require('./db')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({ db })
const app = express()

const PORT = process.env.PORT || 8080

// passport registration
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user
    .findById(id)
    .then(user => {
      done(null, user)
      return null
    })
    .catch(done)
)

const createApp = () => {
  // logging middleware
  app.use(volleyball)

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // compression middleware
  app.use(compression())

  // api routes
  app.use('/api', require('./api'))

  // static file serving
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // send index.html (for front end routing)
  app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startServer = () => {
  app.listen(PORT, () => console.log(`Reading it up on port ${PORT}`))
}

const syncDb = () => db.sync()

if (module === require.main) {
  sessionStore
    .sync()
    .then(syncDb)
    .then(createApp)
    .then(startServer)
} else {
  createApp()
}

module.exports = app
