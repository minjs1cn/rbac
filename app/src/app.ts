import Koa from 'koa'
import { koaBody } from 'koa-body';
import { userRouter } from './routers/admin/user'
import { staticRouter } from './routers/static';

const app = new Koa()
const port = 2222

app.use(koaBody())
app.use(userRouter.routes())
app.use(staticRouter.routes())

app.listen(port, () => {
  console.log(`listen at ${port}`)
})