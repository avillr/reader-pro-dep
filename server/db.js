const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DATABSE_URL || 'postgres://localhost:5432/reader-pro',
  { logging: false }
)

// register models
require('./models')

module.exports = db
