import Cookies from 'js-cookie'

const TokenKey = '_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // 登录时调用此方法设置token到cookie
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  // 登出时移除cookie中的token
  return Cookies.remove(TokenKey)
}
