import Router from '@koa/router';
import { prisma } from '../../services/client';
export const registerRoleRouter = function (router: Router) {
  router.get('/role', async ctx => {
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

  router.get('/role/:id', async ctx => {
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

  router.post('/role', async ctx => {
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

  router.post('/role/:id/permission', async ctx => {
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

  router.delete('/role/:id', async ctx => {
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

  router.patch('/role/:id', async ctx => {
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
}