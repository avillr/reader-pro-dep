const api = require('express').Router()

api.use('/posts', require('./posts'))
api.use('/channels', require('./channels'))

api.use((req, res) => {
  res.sendStatus(404)
})

module.exports = api
