import { Middleware } from 'koa'
import { User } from 'rbac-entities';
import { prisma } from '../../services/client';
import { verifyToken } from '../../utils/jwt';
import { jwt } from '../../config';

declare module 'koa' {
  interface DefaultContext {
    state: {
      user: Omit<User, 'password'>
    }
  }
}

export function useAuthMiddleware(): Middleware {
  return async (ctx, next) => {
    const token = ctx.header.authorization;
    if (!token) {
      ctx.body = { code: -1, message: '未登录' }
      return;
    }
    const decoded = verifyToken(token, jwt.secret) as User;

    if (!decoded) {
      ctx.body = { code: -1, message: 'token无效' }
      return
    }
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      }
    })
    if (!user) {
      ctx.body = { code: -1, message: '用户不存在' }
      return
    }

    const { password, ...rest } = user
    ctx.state.user = rest
    await next();
  }
}