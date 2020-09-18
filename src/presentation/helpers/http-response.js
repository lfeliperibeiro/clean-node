const MissingParamError = require('./missing-param-error')

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
}
