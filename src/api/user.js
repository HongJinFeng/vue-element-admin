import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(uid) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { uid: uid }
  })
}

export function logout(data) {
  return request({
    url: '/user/logout',
    method: 'post',
    data
  })
}
