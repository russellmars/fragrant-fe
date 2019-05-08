// 给以 // 开头的 url 添加 http 或者 https 协议名
export default function supplyProtocol(url = '', protocol) {
  if (url.startsWith('//')) {
    return protocol + ':' + url
  }
  return url
}
