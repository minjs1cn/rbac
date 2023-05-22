export interface Permission {
  id: number
  name: string
  description: string
  /** @type PermissionType */
  type: string
  parentId: string
  /** @type PermissionMenuType */
  menuType?: string
  path?: string
  component?: string
  url?: string
  icon?: string
}

export enum PermissionType {
  Menu = 'menu',
  Api = 'api'
}

export enum PermissionMenuType {
  Null = 'null',
  MenuItem = 'menu_item',
  MenuDir = 'menu_dir',
  PageAction = 'page_action'
}