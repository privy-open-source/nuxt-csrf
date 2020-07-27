export default function createMiddleware (option) {
  return function handleError (error, request, response, next) {
    if (error.code !== 'EBADCSRFTOKEN')
      return next(error)

    return response
      .writeHead(403, { 'Content-Type': 'application/json' })
      .end(JSON.stringify({
        code   : error.code,
        errors : [],
        message: 'CSRF Token Mismatch',
      }))
  }
}
