const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/reader-pro')

module.exports = db
