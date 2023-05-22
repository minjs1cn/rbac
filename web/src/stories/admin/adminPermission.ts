import { Permission, PermissionType } from 'rbac-entities'

export const useAdminPermission = defineStore('adminPermission', () => {
  const permissions = ref<Permission[]>([])
  const menus = computed(() => permissions.value.filter(item => item.type === PermissionType.Menu))

  function replace(d: Permission[]) {
    permissions.value = d;
  }

  return {
    permissions,
    replace,
    menus,
  }
})