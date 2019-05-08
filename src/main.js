import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import AppConst from '@/config'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: AppConst.APP_SENTRY_DSN,
    release: AppConst.APP_SENTRY_RELEASE,
    environment: process.env.VUE_APP_ENV,
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      })
    ]
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
