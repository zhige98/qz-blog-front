import qzRequest from '@/service'
import { IListItem } from './components/HomeList/type'

export const getListData = (data: {
  page: number
  size: number
  keyword?: string
  labels?: number[]
}) => {
  return qzRequest.request<IListItem[]>({
    method: 'post',
    url: '/moment/list',
    data
  })
}
