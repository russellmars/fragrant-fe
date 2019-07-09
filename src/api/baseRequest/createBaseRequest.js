import axios from 'axios'
import { Notify } from 'vant'
// import axiosRetry from 'axios-retry'
// import configureAxiosRetry from './configureAxiosRetry'

const defaultOptions = {
  timeout: 30000
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
  // config = configureAxiosRetry(config)
  return config
}

const requestErrorHandler = function(error) {
  return Promise.reject(error)
}

const responseSuccessHandler = function(response) {
  const { data, config } = response
  if (!data.success) {
    const { success, error_msg: message } = data
    return responseError(config, {
      success,
      message
    })
  }
  return response.data
}

const responseErrorHandler = function(error) {
  const { response, config } = error
  let message = '网络错误'
  if (response) {
    // 请求已经发出去，服务器返回错误
    const data = response.data
    if (data && data.error_msg) {
      message = data.error_msg
    }
    // } else {
    //   // 请求没有发出去，网络错误等
    //   message = error.message
  }
  return responseError(config, {
    success: false,
    message
  })
}

function responseError(config, error) {
  if (config.catchError !== false) {
    Notify(error.message)
  }
  return Promise.reject(error)
}

/**
 * 创建一个base请求
 * @param {*} presetOptions { baseURL, ... } 可以加入任何参数，在request 和response 的interceptor 可以用到
 */
export default function(presetOptions) {
  const req = axios.create(getBaseRequestConfig(presetOptions))
  // axiosRetry(req, {
  //   retries: 3, // 重试次数
  //   retryDelay: axiosRetry.exponentialDelay, // 重试
  //   shouldResetTimeout: true,
  //   retryCondition: () => true
  // })
  // Add a request interceptor
  req.interceptors.request.use(requestSuccessHandler, requestErrorHandler)

  // Add a response interceptor
  req.interceptors.response.use(responseSuccessHandler, responseErrorHandler)
  return req
}
