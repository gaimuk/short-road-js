class CreateShortUrlResponse {
  constructor (longUrl, shortUrlToken, redirectUrl) {
    this.longUrl = longUrl
    this.shortUrlToken = shortUrlToken
    this.redirectUrl = redirectUrl
  }
}

module.exports.CreateShortUrlResponse = CreateShortUrlResponse
