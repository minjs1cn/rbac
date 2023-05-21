import Router from '@koa/router';
import { prisma } from '../../services/client';

export const userRouter = new Router({
  prefix: '/api/admin/user'
})

userRouter.get('/', async ctx => {
  const data = await prisma.user.findMany({
    include: {
      roles: true
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

userRouter.get('/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      roles: true
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

userRouter.post('/', async ctx => {
  const { name, email, password } = ctx.request.body
  const data = await prisma.user.create({
    data: {
      name,
      email,
      password,
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

userRouter.delete('/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.$transaction([
    prisma.userRole.deleteMany({
      where: {
        userId: Number(id)
      }
    }),
    prisma.user.delete({
      where: {
        id: Number(id)
      }
    }),
  ])
  ctx.body= {
    code: 0,
    data,
  }
})

userRouter.patch('/:id', async ctx => {
  const { id } = ctx.params
  const { name, email, password } = ctx.request.body
  const data = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: {
      name,
      email,
      password
    }
  })
  ctx.body = {
    code: 0,
    data,
  }
})