const Router = require('koa-router')
const page = require('./page.js')
const blog = require('./blog.js')
const router = new Router()

router.use('/page', page.routes(), page.allowedMethods())
router.use('/api', blog.routes(), blog.allowedMethods())

module.exports = router
