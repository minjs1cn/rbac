import Router from '@koa/router';
import { prisma } from '../../services/client';
import { LoginReq, LoginRes } from 'rbac-entities';

export const loginRouter = new Router({
  prefix: '/api/admin/login'
})

loginRouter.post('/', async ctx => {
  const { email, password } = ctx.request.body as LoginReq
  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  })
  if (!user) {
    ctx.body = {
      code: -1,
    }
  }
  ctx.body = {
    code: 0,
    data: {} as LoginRes
  }
})