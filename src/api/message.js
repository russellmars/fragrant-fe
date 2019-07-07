import { baseAPI } from './baseRequest'

/**
 * params { loginname }
 */
export function getCount(options = {}) {
  return baseAPI({
    ...options,
    url: '/message/count',
    method: 'get'
  })
}

/**
 * params { accesstoken, mdrender }
 */
export function getMessages(options = {}) {
  return baseAPI({
    ...options,
    url: '/messages',
    method: 'get'
  })
}

/**
 * data { accesstoken }
 */
export function markAll(options = {}) {
  return baseAPI({
    ...options,
    url: '/message/mark_all',
    method: 'post'
  })
}

/**
 * data { accesstoken }
 * fillParams { msg_id }
 */
export function mark(options = {}) {
  return baseAPI({
    ...options,
    url: '/message/mark_one/:msg_id',
    method: 'post'
  })
}
