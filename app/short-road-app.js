const express = require('express')
const bodyParser = require('body-parser')
const urlRouter = require('./routes/url-router')
const helmet = require('helmet')
const { ErrorRes } = require('./models/res/error-res')

let app = express()

app.use(helmet())
app.use(bodyParser.json())

// Routes
app.use('/', urlRouter)

// No routes matched, HTTP 404
app.use(function (req, res, next) {
  let err = new Error('No routes matched')
  err.status = 404
  next(err)
})

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  if (res.headerSent) {
    return next(err)
  }

  let errorRes = new ErrorRes('001', err.message)
  res.status(err.status || 500).json(errorRes)
})

// Start server
app.listen(3000, function () {
  console.log('short-hand-js listening on port 3000')
})
