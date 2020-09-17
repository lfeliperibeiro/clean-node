class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500
      }
    }
    const { email, password } = httpRequest.body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('Shold return 400 if no email is provider', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpRepsonse = sut.route(httpRequest)
    expect(httpRepsonse.statusCode).toBe(400)
  })

  test('Shold return 400 if no email is provider', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_email@email.com'
      }
    }
    const httpRepsonse = sut.route(httpRequest)
    expect(httpRepsonse.statusCode).toBe(400)
  })
  test('Shold return 500 if no httpRequest is provider', () => {
    const sut = new LoginRouter()
    const httpRepsonse = sut.route()
    expect(httpRepsonse.statusCode).toBe(500)
  })
  test('Shold return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpRepsonse = sut.route({})
    expect(httpRepsonse.statusCode).toBe(500)
  })
})
