import { baseAPI } from './baseRequest'

/**
 * data { accesstoken, topic_id }
 */
export function collect(options = {}) {
  return baseAPI({
    ...options,
    url: '/topic_collect/collect',
    method: 'post'
  })
}

/**
 * data { accesstoken, topic_id }
 */
export function delCollect(options = {}) {
  return baseAPI({
    ...options,
    url: '/topic_collect/de_collect',
    method: 'post'
  })
}

/**
 * fillParams { loginname }
 */
export function getTopics(options = {}) {
  return baseAPI({
    ...options,
    url: '/topic_collect/:loginname',
    method: 'get'
  })
}
