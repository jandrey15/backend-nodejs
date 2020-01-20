const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/json', function (req, res) {
  res.json({ hello: 'world' })
})

app.get('/year/:year', function (req, res) {
  const year = req.params.year

  if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    res.send(`The year ${req.params.year} is bisiesto`)
  } else {
    res.send(`The year ${req.params.year} NO is bisiesto`)
  }
})

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})
