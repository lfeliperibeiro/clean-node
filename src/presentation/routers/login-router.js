const HttpRepsonse = require('../helpers/http-response')

module.exports = class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpRepsonse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return HttpRepsonse.badRequest('email')
    }
    if (!password) {
      return HttpRepsonse.badRequest('password')
    }
  }
}
