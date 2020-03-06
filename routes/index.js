const router = require('koa-router')()
const user = require('./users')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
