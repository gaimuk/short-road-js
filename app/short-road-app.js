const express = require('express')
const bodyParser = require('body-parser')
const urlRouter = require('./routes/url/url-router')
const helmet = require('helmet')
const { ErrorResponse } = require('./routes/error-response')

let app = express()

app.use(helmet())
app.use(bodyParser.json())

// Routes
app.use('/', urlRouter)

// No routes matched, HTTP 404
app.use(function (req, res, next) {
  let err = new Error(`No routes matched, path: ${req.url}`)
  err.status = 404
  next(err)
})

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  if (res.headerSent) {
    return next(err)
  }

  // TODO: Return different error response according to error type

  let errorRes = new ErrorResponse('001', err.message)
  res.status(err.status || 500).json(errorRes)
})

// Start server
app.listen(3000, function () {
  console.log('short-hand-js listening on port 3000')
})
