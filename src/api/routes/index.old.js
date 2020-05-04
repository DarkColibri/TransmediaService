/** *************
 *  MIDDELWERE  *
 * ************ */
// const debug = require('debug')('web:src:api:routes:index.js')
// debug('Init ...')

const { Router } = require('express')
const bodyParser = require('body-parser')

// Para el Cross- Origin Resource Sharing
// El error este del http
const cors = require('cors')
const compression = require('compression')

module.exports = function ({ ThreadRouter }) {
  const router = Router()
  const apiRoute = Router()

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())

  // apiRoute.use('/associations', AssociationRouter)
  // apiRoute.use('/associationscategories', AssociationCategoryRouter)
  // apiRoute.use('/categories', CategoryRouter)
  apiRoute.use('/threads', ThreadRouter)
  // apiRoute.use('/roles', RoleRouter)
  // apiRoute.use('/posts', PostRouter)
  // apiRoute.use('/users', UserRouter)

  router.use('/api', apiRoute)

  return router
}
