const api = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { User } = require('../../../db/models')

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }

  const strategy = new GoogleStrategy(
    googleConfig,
    (token, refreshToken, profile, done) => {
      const googleId = profile.id
      const name = profile.displayName
      const email = profile.emails[0].value

      User.find({ where: { googleId } })
        .then(
          foundUser =>
            foundUser
              ? done(null, foundUser)
              : User.create({
                name,
                email,
                googleId
              }).then(createdUser => done(null, createdUser))
        )
        .catch(done)
    }
  )

  passport.use(strategy)

  api.get('/', passport.authenticate('google', { scope: 'email' }))

  api.get(
    '/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  )
}

module.exports = api
