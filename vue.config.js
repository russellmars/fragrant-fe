const SentryCliPlugin = require('@sentry/webpack-plugin')
const WebpackCdnPlugin = require('webpack-cdn-plugin')
const colors = require('colors/safe')
const pkg = require('./package.json')
const production = process.env.NODE_ENV === 'production'

process.env.VUE_APP_VERSION = pkg.version
process.env.VUE_APP_NAME = pkg.name
process.env.VUE_APP_ENV = require('./code.env')
process.env.VUE_APP_RELEASE = `${pkg.name}@${pkg.version}`

console.log(colors.green(`代码环境 === ${process.env.VUE_APP_ENV}\r\n`))

module.exports = {
  publicPath: production ? 'fragrant-fe' : '/',
  outputDir: 'dist/fragrant-fe',
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
      ignoreFile: '.sentrycliignore',
      release: process.env.VUE_APP_RELEASE,
      configFile: '.sentryclirc',
      deleteAfterCompile: true
    }),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'vue.runtime.min.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'vue-router.min.js'
        },
        {
          name: 'vuex',
          var: 'Vuex',
          path: 'vuex.min.js'
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'axios.min.js'
        },
        {
          name: '@sentry/browser',
          var: 'Sentry',
          path: 'build/bundle.min.js',
          prodUrl: 'https://cdn.jsdelivr.net/npm/:name@:version/:path'
        },
        {
          name: '@sentry/integrations',
          var: 'Sentry.Integrations',
          path: 'build/vue.min.js',
          prodUrl: 'https://cdn.jsdelivr.net/npm/:name@:version/:path'
        }
      ],
      prod: production,
      prodUrl: 'https://cdn.bootcss.com/:name/:version/:path',
      crossOrigin: 'anonymous'
    })
  ]
}
