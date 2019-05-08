import { baseAPI } from './baseRequest'

/**
 * 4.02-授权码校验
 */
export const quickLogin = (options = {}) => {
  return baseAPI.post('/account/quickLogin', options.data)
}
