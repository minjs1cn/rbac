import Router from '@koa/router';
import { useAuthMiddleware } from '../../middlewares/admin/auth';

export const adminRouter = new Router({
  prefix: '/api/admin',
})

adminRouter.use(useAuthMiddleware())