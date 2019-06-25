import request from '@/utils/request'

export function testUrl() {
  return request({
    url: 'test/hbase',
    method: 'post'
  })
}
