const MissingParamError = require('./missing-param-error')
const UnauthorrizedError = require('./unathorized-error')

module.exports = class HttpRepsonse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)

    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorrizedError () {
    return {
      statusCode: 401,
      body: new UnauthorrizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
