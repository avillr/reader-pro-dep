const api = require('express').Router()

api.use('/posts', require('./posts'))
api.use('/channels', require('./channels'))

api.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = api
