const api = require('express').Router()
const { Post } = require('../../db/models')

// GET /api/posts
api.get('/', (req, res, next) => {
  Post.findAll()
    .then(posts => {
      res.json(posts)
    })
    .catch(next)
})

// POST /api/posts
api.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => res.status(201).json(post))
    .catch(next)
})

// Param fetching for below routes
api.param('id', (req, res, next, id) => {
  Post.findById(id)
    .then(post => {
      if (!post) {
        const err = Error('Post not found')
        err.status = 404
        throw err
      }
      req.post = post
      next()
      return null // silences bluebird warning
    })
    .catch(next)
})

// GET /api/posts/:id
api.get('/:id', (req, res) => {
  res.json(req.post)
})

// PUT /api/posts/:id
api.put('/:id', (req, res, next) => {
  req.post
    .update(req.body)
    .then(post => res.status(200).json(post))
    .catch(next)
})

// DELETE /api/posts/:id
api.delete('/:id', (req, res, next) => {
  req.post
    .destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
