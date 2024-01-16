import qzRequest from '@/service'

// 获取标签列表
export const getLabels = () => {
  return qzRequest.request({
    url: '/labels/list',
    method: 'get'
  })
}
