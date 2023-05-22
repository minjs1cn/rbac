import { User, Permission } from '../models/index'

export interface LoginReq extends Pick<User, 'email' | 'password'> {}
export interface LoginRes extends Omit<User, 'password'> {
  permissions: Permission[];
  token: string;
}
