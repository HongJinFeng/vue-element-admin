import request from '@/utils/request'

export function getLast30DDeposit() {
  return request({
    url: '/financial/last-30-day',
    method: 'get'
  })
}

export function getCurrnetDeposit() {
  return request({
    url: '/financial/current',
    method: 'get'
  })
}

