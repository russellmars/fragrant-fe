import { baseAPI } from './baseRequest'

/**
 * fillParams { loginname }
 */
export function profile(options = {}) {
  return baseAPI({
    ...options,
    url: '/user/:loginname',
    method: 'get'
  })
}

/**
 * data { accesstoken }
 */
export function validate(options = {}) {
  return baseAPI({
    ...options,
    url: '/accesstoken',
    method: 'post'
  })
}
