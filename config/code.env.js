module.exports = (function() {
  const env = process.env
  if (env.NODE_ENV === 'production') {
    if (env.npm_config_test) {
      return 'test'
    }
    return 'production'
  }
  return 'local'
})()
