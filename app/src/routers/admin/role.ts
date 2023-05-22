import Router from '@koa/router';
import { prisma } from '../../services/client';
import { adminRouter } from './router';

adminRouter.get('/role', async ctx => {
  const data = await prisma.role.findMany({
    include: {
      permissions: true,
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

adminRouter.get('/role/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.role.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      permissions: true,
    }
  })
  ctx.body= {
    code: 0,
    data,
  }
})

adminRouter.post('/role', async ctx => {
  const { name, description, type, parentId = -1 } = ctx.request.body
  const data = await prisma.role.create({
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

adminRouter.post('/role/:id/permission', async ctx => {
  const { id } = ctx.params
  const { permissionIds = [] } = ctx.request.body as { permissionIds: string[] }
  await prisma.rolePermission.deleteMany({
    where: {
      roleId: Number(id),
    }
  })
  const data = await prisma.rolePermission.createMany({
    data: permissionIds.map(id => Number(id)).map(permissionId => ({
      permissionId,
      roleId: Number(id)
    }))
  })
  ctx.body= {
    code: 0,
    data,
  }
})

adminRouter.delete('/role/:id', async ctx => {
  const { id } = ctx.params
  const data = await prisma.$transaction([
    prisma.userRole.deleteMany({
      where: {
        roleId: Number(id)
      }
    }),
    prisma.rolePermission.deleteMany({
      where: {
        roleId: Number(id)
      }
    }),
    prisma.role.delete({
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

adminRouter.patch('/role/:id', async ctx => {
  const { id } = ctx.params
  const { name, description, type, parentId = -1 } = ctx.request.body
  const data = await prisma.role.update({
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