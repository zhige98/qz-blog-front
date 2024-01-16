import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { QZRequestConfig } from './type'

class QZRequest {
  instance: AxiosInstance
  constructor(config: QZRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: QZRequestConfig<T>) {
    // 单次请求成功的拦截处理
    if (config.interceptors?.requestSuccessFn) {
      // @ts-ignore 拦截器的类型和config的类型不一致，1.6.0版本后，多了个header
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: QZRequestConfig<T>) {
    return this.request({ ...config, method: 'get' })
  }
  post<T = any>(config: QZRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: QZRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: QZRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default QZRequest
