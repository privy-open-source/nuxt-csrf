import path from 'path'
import csurf from 'csurf'
import cookieParser from 'cookie-parser'
import handlerError from './server-middleware/handle-error'

export default function Csrf (moduleOptions) {
  this.addPlugin({ src: path.resolve(__dirname, './plugins/csrf.js') })

  this.addServerMiddleware(cookieParser())
  this.addServerMiddleware(csurf({ cookie: true }))
  this.addServerMiddleware(handlerError())
}

module.exports.meta = require('./package.json')
