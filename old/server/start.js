const path = require('path')
const { resolve } = require('path')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const PrettyError = require('pretty-error')
const compression = require('compression')

const db = require('../db')

const app = express()

const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV === 'development') {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
}

// Pretty error prints errors all pretty.
const prettyError = new PrettyError()

// Skip events.js and http.js and similar core node files.
prettyError.skipNodeFiles()

// Skip all the trace lines about express' core and sub-modules.
prettyError.skipPackage('express')

module.exports = app
  // Cookie-session docs: https://www.npmjs.com/package/cookie-session
  .use(
    require('cookie-session')({
      name: 'session',
      keys: [process.env.SESSION_SECRET || 'an insecure secret key']
    })
  )
  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  // Compression middleware
  .use(compression())
  // Authentication middleware
  .use(passport.initialize())
  .use(passport.session())
  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))
  // Serve our api - ./api
  .use('/api', require('./api'))
  // any requests with an extension (.js, .css, etc.) turn into 404
  .use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })
  // Send index.html for anything else.
  .get('/*', (_, res) =>
    res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
  )

if (module === require.main) {
  // Start listening only if we're the main module.
  db.sync().then(() => {
    const server = app.listen(PORT, () => {
      console.log(`--- Started HTTP Server for Reader Pro ---`)
      const { address, port } = server.address()
      const host = address === '::' ? 'localhost' : address
      const urlSafeHost = host.includes(':') ? `[${host}]` : host
      console.log(`Listening on http://${urlSafeHost}:${port}`)
    })
  })
}
