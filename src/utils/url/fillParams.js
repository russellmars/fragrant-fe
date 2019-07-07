/**
 * 填充path
 * @param {*} path 需要被填充的path
 * @param {*} params 需要填充basePath的object
 * @example fillParams('/:aaa/:bbb/', {aaa: 'hello', bbb: 'world'}) // /hello/world/
 */
export default function fillParams(path = '', params = {}) {
  return path.replace(/:(\w+)/g, function(match) {
    return params[match.slice(1)]
  })
}
