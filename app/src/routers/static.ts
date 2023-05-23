import Router from '@koa/router';

const staticRouter = new Router()

staticRouter.get('/', ctx => {
  ctx.body= '<h1>hello rbac</h1>'
})

export {
  staticRouter
}