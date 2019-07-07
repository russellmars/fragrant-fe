import { baseAPI } from './baseRequest'

/**
 * params { page, tab, limit, mdrender }
 */
export function getTopics(options = {}) {
  return baseAPI({
    ...options,
    url: '/topics',
    method: 'get'
  })
}

/**
 * params { mdrender, accesstoken }
 * fillParams: { id }
 */
export function getTopic(options = {}) {
  return baseAPI({
    ...options,
    url: '/topic/:id',
    method: 'get'
  })
}
