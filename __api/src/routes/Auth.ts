import Router from '@koa/router'
import passport from 'koa-passport'

const router = new Router({
  prefix: '/api',
})

router.post(
  '/auth/login',
  passport.authenticate('local', { session: false }),
  (ctx) => (ctx.body = ctx.state.user)
)

router.get(
  '/auth/user',
  passport.authenticate('jwt', { session: false }),
  (ctx) => (ctx.body = ctx.state.user)
)

export default router
