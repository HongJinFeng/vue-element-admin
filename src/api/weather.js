import request from '@/utils/request'

export function getWeather() {
  return request({
    url: '/weather/query',
    method: 'get'
  })
}

export function getTodayWeather() {
  return request({
    url: '/weather/query-today',
    method: 'get'
  })
}

