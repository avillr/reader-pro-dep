const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

app.use(volleyball)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

if (module === require.main) {
  db.sync().then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`Reading it up on port ${PORT}`))
  })
}
