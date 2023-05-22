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