import Router from "@koa/router";
import { staticRouter } from "./static";
import { commonRouter } from "./common";
import { adminRouter } from "./admin/router";

const router = new Router()

router.use(adminRouter.routes()).use(commonRouter.routes()).use(staticRouter.routes())

export {
  router
}