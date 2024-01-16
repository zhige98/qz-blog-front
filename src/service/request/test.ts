import qzRequest from '../index'

qzRequest
  .request<{ data: string }>({
    url: 'moment/list',
    method: 'get',
    params: {
      offset: 0,
      size: 10
    },
    interceptors: {
      responseSuccessFn(res) {
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
  })
