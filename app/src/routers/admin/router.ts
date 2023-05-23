import Router from '@koa/router';
import { registerPermissionRouter } from './permission';
import { registerRoleRouter } from './role';
import { registerUserRouter } from './user';

const adminRouter = new Router({
  prefix: '/api/admin',
})

registerPermissionRouter(adminRouter)
registerRoleRouter(adminRouter)
registerUserRouter(adminRouter)

export {
  adminRouter
}
