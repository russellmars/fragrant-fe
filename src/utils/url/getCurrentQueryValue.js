import getQueryValue from './getQueryValue'

export default function getCurrentQueryValue(key, options) {
  return getQueryValue(location.search, key, options)
}
