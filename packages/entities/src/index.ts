export interface User {
  id: number
  name: string
  email: string
  password: string
}

export interface Role {
  id: number
  name: string
  description: string
  type: string
  parentId: string
}

export enum RoleType {
  Normal = 'normal',
  Admin = 'admin'
}

export interface Permission {
  id: number
  name: string
  description: string
  type: string
  parentId: string
}

export enum PermissionType {
  Menu = 'menu',
  MenuDir = 'menu_dir',
  Action = 'action'
}