class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email || !httpRequest.body.password) {
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
})
