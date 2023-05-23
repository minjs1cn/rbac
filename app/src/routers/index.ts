import Router from "@koa/router";
import { staticRouter } from "./static";
import { loginRouter } from "./common/login";
import { adminRouter } from "./admin/router";

const router = new Router()

router.use(adminRouter.routes()).use(loginRouter.routes()).use(staticRouter.routes())

export {
  router
}