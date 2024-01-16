import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

interface QZInterceptors<T> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface QZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QZInterceptors<T>
}
