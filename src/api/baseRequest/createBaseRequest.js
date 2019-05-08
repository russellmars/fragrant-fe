import axios from 'axios'
import axiosRetry from 'axios-retry'

// 失败的请求
const errorResponse = {
  responseCode: 9999,
  responseMsg: '网络连接超时',
  isSuccess: false
}

const defaultOptions = {
  timeout: 10000
}

/**
 * 合并预设和默认参数
 * @param {*} presetOptions { baseURL, ... }
 */
const getBaseRequestConfig = function(presetOptions) {
  return Object.assign({}, defaultOptions, presetOptions)
}

/**
 * axios请求成功的处理回调
 * @param {*} config
 * @param {*签名的时候是否需要业务参数} signWithRow
 */
const requestSuccessHandler = function(config) {
  // axios 默认会根据 data 的类型转换 data 以及设置header
  return config
}

const requestErrorHandler = function(error) {
  console.log('requestError === ', error)
  return Promise.resolve(errorResponse)
}

const responseSuccessHandler = function(response) {
  return response.data
}

const responseErrorHandler = function(error) {
  if (error.response) {
    // 请求已经发出去，服务器返回错误
    console.log(error.response)
  } else {
    // 请求没有发出去，网络错误等
    console.log('Error', error.message)
  }
  console.log(error.config)

  // return Promise.reject(error)
  return Promise.resolve(errorResponse)
}

/**
 * 创建一个base请求
 * @param {*} presetOptions { baseURL, ... } 可以加入任何参数，在request 和response 的interceptor 可以用到
 */
export default function(presetOptions) {
  const req = axios.create(getBaseRequestConfig(presetOptions))
  // axiosRetry 会根据响应的状态码来确定是否重试
  // axiosRetry 目前还有一个无限添加 baseURL 的 bug：https://github.com/softonic/axios-retry/issues/67
  axiosRetry(req, {
    retries: 3, // 重试次数
    retryDelay: axiosRetry.exponentialDelay, // 重试
    shouldResetTimeout: true
  })
  // Add a request interceptor
  req.interceptors.request.use(requestSuccessHandler, requestErrorHandler)

  // Add a response interceptor
  req.interceptors.response.use(responseSuccessHandler, responseErrorHandler)
  return req
}
