import request from '@/utils/request'

export function getAllTerminal(deptId) {
  const params = {
    deptId,
    page: 0,
    pageSize: 10
  }
  return request({
    url: '/api/habase/data',
    method: 'get',
    params
  })
}
export function getOptionsValue(status) {
  const params = {
    status: status
  }
  return request({
    url: '/api/options/select',
    method: 'get',
    params
  })
}

export function getTableHeadValue(status) {
  const params = {
    status: status
  }
  return request({
    url: '/api/table/head',
    method: 'get',
    params
  })
}
