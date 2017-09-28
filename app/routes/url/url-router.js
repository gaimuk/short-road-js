const express = require('express')
const { CreateShortUrlResponse } = require('./create-short-url-response')
const { GetLongUrlResponse } = require('./get-long-url-response')

let router = express.Router()

router.route('/shortUrl')
  .post(function (req, res) {
    let input = req.body
    // TODO: Validation

    // TODO: Store URL into MongoDB and return the seq number
    // TODO: Base58 encode the ID to short URL token

    res.json(new CreateShortUrlResponse(input.url, '12345', 'http://localhost:3000/12345'))
  })

router.route('/longUrl/:shortUrlToken')
  .get(function (req, res) {
    let inputShortUrlToken = req.params.shortUrlToken
    console.log(`Input short URL token: ${inputShortUrlToken}`)

    // TODO: Base58 decode the short URL token to seq number
    // TODO: Retrieve the URL from DB using the seq number

    res.json(new GetLongUrlResponse('http://www.google.com'))
  })

module.exports = router
