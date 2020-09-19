module.exports = class UnauthorrizedError extends Error {
  constructor (paramName) {
    super(`unauthorrized: ${paramName}`)
    this.name = 'UnauthorrizedError'
  }
}
