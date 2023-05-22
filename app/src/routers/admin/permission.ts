import Router from '@koa/router';
import { prisma } from '../../services/client';
import { adminRouter } from './router';

adminRouter.get('/permission', async ctx => {
  const data = await prisma.permission.findMany({
    include: {
      roles: true
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

adminRouter.get('/permission/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.permission.findUnique({
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

adminRouter.post('/permission', async ctx => {
  const { name, description, type, parentId = -1 } = ctx.request.body
  const data = await prisma.permission.create({
    data: {
      name,
      description,
      type,
      parentId,
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

adminRouter.delete('/permission/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.$transaction([
    prisma.rolePermission.deleteMany({
      where: {
        permissionId: Number(id)
      }
    }),
    prisma.permission.delete({
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

adminRouter.patch('/permission/:id', async ctx => {
  const { id } = ctx.params
  const { name, description, type, parentId = -1 } = ctx.request.body
  const data = await prisma.permission.update({
    where: {
      id: Number(id)
    },
    data:{
      name,
      description,
      type,
      parentId,
    }
  })
  ctx.body = {
    code: 0,
    data,
  }
})