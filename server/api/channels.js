const api = require('express').Router()
const { Channel } = require('../db/models')

// GET /api/channels
api.get('/', (req, res, next) => {
  Channel.findAll()
    .then(channels => {
      res.json(channels)
    })
    .catch(next)
})

// POST /api/channels
api.post('/', (req, res, next) => {
  Channel.create(req.body)
    .then(channel => res.status(201).json(channel))
    .catch(next)
})

// Param fetching for below routes
api.param('id', (req, res, next, id) => {
  Channel.findById(id)
    .then(channel => {
      if (!channel) {
        const err = Error('Channel not found')
        err.status = 404
        throw err
      }
      req.channel = channel
      next()
      return null // silences bluebird warning
    })
    .catch(next)
})

// GET /api/channels/:id
api.get('/:id', (req, res) => {
  res.json(req.channel)
})

// PUT /api/channels/:id
api.put('/:id', (req, res, next) => {
  req.channel
    .update(req.body)
    .then(channel => res.status(200).json(channel))
    .catch(next)
})

// DELETE /api/channels/:id
api.delete('/:id', (req, res, next) => {
  req.channel
    .destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
