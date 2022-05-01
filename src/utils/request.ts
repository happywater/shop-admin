import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('interceptors.request')
  // 统一设置用户身份 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  console.log('interceptors.response')
  // 统一处理接口响应错误，比如token失效，服务端异常
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  console.log('AxiosRequestConfig')
  console.log(import.meta.env)
  return request(config).then(res => {
    return res.data.data as T
  })
}
