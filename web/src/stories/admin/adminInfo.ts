import { User } from 'rbac-entities'

type LoginInfo = Pick<User, 'id' | 'name' | 'email'> & {
  token: string;
}

export const useAdminInfo = defineStore('adminInfo', () => {
  const loginInfo = reactive<LoginInfo>({
    id: 0,
    name: '',
    email: '',
    token: '',
  })

  function replace(info: LoginInfo) {
    loginInfo.id = info.id
    loginInfo.name = info.name
    loginInfo.email = info.email
  }

  function setToken(token: string) {
    loginInfo.token = token
  }

  return {
    loginInfo,
    replace,
    setToken,
  }
})