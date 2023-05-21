import Router from '@koa/router';

export const staticRouter = new Router({
  prefix: '/'
})

staticRouter.get('/', ctx => {
  ctx.body= '<h1>hello rbac</h1>'
})