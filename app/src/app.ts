import Koa from 'koa'
import { koaBody } from 'koa-body';
import { adminRouter } from './routers/admin/router'
import { staticRouter } from './routers/static';

const app = new Koa()
const port = 2222

app.use(koaBody())
app.use(adminRouter.routes())
app.use(staticRouter.routes())

app.listen(port, () => {
  console.log(`listen at ${port}`)
})