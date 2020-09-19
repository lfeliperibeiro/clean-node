const HttpRepsonse = require('../helpers/http-response')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

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
    this.authUseCase.auth(email, password)
    return {
      statusCode: 401
    }
  }
}
