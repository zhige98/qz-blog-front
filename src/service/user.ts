import qzRequest from './index'

export interface IPersion {
  avatar: string
  username: string
  description: string
  email: number
  liveIn: string
}

export const getUserInfo = () => {
  return qzRequest.request<IPersion>({
    interceptors: {
      responseSuccessFn(res) {
        return res
      }
    },
    url: '/users/getMyInfo',
    method: 'get'
  })
}
