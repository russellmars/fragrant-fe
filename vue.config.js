const SentryCliPlugin = require('@sentry/webpack-plugin')
const WebpackCdnPlugin = require('webpack-cdn-plugin')
const colors = require('colors/safe')
const production = process.env.NODE_ENV === 'production'

process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_NAME = require('./package.json').name
process.env.VUE_APP_ENV = require('./code.env')

console.log(colors.green(`代码环境 === ${process.env.VUE_APP_ENV}\r\n`))

module.exports = {
  publicPath: production ? 'fragrant-fe' : '/',
  productionSourceMap: true,
  devServer: {
    port: 9102,
    proxy: require('./proxy.config')
  },
  configureWebpack: config => {
    if (production) {
      // 为生产环境修改配置...
      config.plugins = config.plugins.concat(getWebpackPluginsInProduction())
    } else {
      // 为开发环境修改配置...
    }
  }
}

// build 时获取额外的 webpack 插件
function getWebpackPluginsInProduction() {
  return [
    new SentryCliPlugin({
      include: './dist/',
      ignoreFile: '.sentrycliignore'
    }),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'dist/vue.runtime.min.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'dist/vue-router.min.js'
        },
        {
          name: 'vuex',
          var: 'Vuex',
          path: 'dist/vuex.min.js'
        }
      ],
      prod: production
    })
  ]
}
