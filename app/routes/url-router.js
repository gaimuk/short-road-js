const express = require('express')

let router = express.Router()

router.route('/shortUrl')
  .post(function (req, res) {
    let input = req.body
    console.log(`Input message for create short URL: ${JSON.stringify(input)}`)

    var result = {
      'msg': `created shortUrl: ${JSON.stringify(input)}`
    }
    res.json(result)
  })

router.route('/longUrl/:shortUrlToken')
  .get(function (req, res) {
    var result = {
      'msg': 'find longUrl by shortUrlToken: ' + req.params.shortUrlToken
    }
    res.json(result)
  })

module.exports = router
