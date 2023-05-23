import koaJwt from 'koa-jwt'
// import { useAuthMiddleware } from './auth';

export const useJwtMiddleware = function(secret: string, path?: RegExp[]) {
  return koaJwt({ secret }).unless({
    path, // 不需要验证的接口
  })
  // return useAuthMiddleware()
};
