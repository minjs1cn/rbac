import Koa from 'koa'
import { koaBody } from 'koa-body';
import { jwt, server } from './config';
import { useJwtMiddleware } from './middlewares/common/jwt';
import { router } from './routers'

const app = new Koa()

app.use(koaBody())
app.use(useJwtMiddleware(jwt.secret, jwt.ignores))
app.use(router.routes()).use(router.allowedMethods())

app.listen(server.port, () => {
  console.log(`listen at ${server.port}`)
})