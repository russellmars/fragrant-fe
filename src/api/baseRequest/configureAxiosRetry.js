// axiosRetry 会根据响应的状态码来确定是否重试
// axiosRetry 目前还有一个无限添加 baseURL 的 bug：https://github.com/softonic/axios-retry/issues/67
export default function(config) {
  if (config.baseURL && config.url && config.url.startsWith(config.baseURL)) {
    config.url = config.url.replace(config.baseURL, '')
  }
  return config
}
