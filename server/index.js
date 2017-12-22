const path = require('path')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const PrettyError = require('pretty-error')
const compression = require('compression')
const db = require('./db')

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
  if (process.env.NODE_ENV === 'development') app.use(require('volleyball'))

  // Pretty error prints errors all pretty.
  const prettyError = new PrettyError()

  // Skip events.js and http.js and similar core node files.
  prettyError.skipNodeFiles()

  // Skip all the trace lines about express' core and sub-modules.
  prettyError.skipPackage('express')

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // compression middleware
  app.use(compression())

  // session middleware with passport
  app.use(
    require('cookie-session')({
      name: 'session',
      keys: [process.env.SESSION_SECRET || 'an insecure secret key']
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  // api routes
  app.use('/api', require('./api'))

  // static file serving
  app.use(express.static(path.join(__dirname, '..', 'build')))

  // send index.html (for front end routing)
  app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'build/index.html'))
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
