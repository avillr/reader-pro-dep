const api = require('express').Router()
const User = require('../../models/user')

api.use('/google', require('./google'))

api.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists.')
      } else {
        next(err)
      }
    })
})

api.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user.correctPassword(req.body.password)) {
        req.login(user, err => (err ? next(err) : res.json(user)))
      } else {
        res.status(401).send('Incorrect username or password.')
      }
    })
    .catch(next)
})

api.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/login')
})

module.exports = api
