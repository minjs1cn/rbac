import { Middleware } from 'koa'
import { User } from 'rbac-entities';
import { prisma } from '../../services/client';

declare module 'koa' {
  interface DefaultContext {
    token: string
    user: User
  }
}

export function useAuthMiddleware(): Middleware {
  return async (ctx, next) => {
    const token = ctx.headers.authorization;
    if (token) {
      const user = await prisma.user.findUnique({
        where: {
          id: 1,
        }
      })
      ctx.user = user
      ctx.token = token
    }
    await next();
  }
}