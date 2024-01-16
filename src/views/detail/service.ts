import qzRequest from '@/service'
import { DetailItem } from './type'

export function getDetail(id: string) {
  return qzRequest.get<DetailItem>({
    url: `/moment/detail/${id}`
  })
}
