import QZRequest from './request'

console.log(process.env.REACT_APP_QZ_BLOG_URL)

const qzRequest = new QZRequest({
  baseURL: '/qz-blog-api',
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
    responseSuccessFn(res) {
      if (res.data) {
        return res.data
      }
      return res
    }
  }
})

export default qzRequest
