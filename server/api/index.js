'use strict'

// const api = (module.exports = require('express').Router())
const api = require('express').Router()
module.exports = api

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// No routes matched? 404.
api.use((req, res) => res.sendStatus(404))
