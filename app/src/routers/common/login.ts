import Router from '@koa/router';
import { prisma } from '../../services/client';
import { LoginReq, LoginRes } from 'rbac-entities';
import { generateToken } from '../../utils/jwt';
import { jwt } from '../../config';

const loginRouter = new Router({
  prefix: '/api/login'
})

loginRouter.post('/', async ctx => {
  const { email, password } = ctx.request.body as LoginReq
  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  })
  // 用户不存在
  if (!user) {
    ctx.body = {
      code: -1,
      data: '用户不存在'
    }
    return;
  }
  // 验证用户名和密码
  if (email === user.email && password !== user.password) {
    ctx.body = { code: -1, message: '用户名或密码错误' };
    return
  }

  // 生成JWT
  const userInfo = { email, name: user.name, id: user.id }
  const token = generateToken(userInfo, jwt.secret, jwt.expiresIn)
  ctx.body = {
    code: 0,
    message: '登录成功',
    data: {
      token,
      userInfo,
    }
  }
})

export {
  loginRouter
}