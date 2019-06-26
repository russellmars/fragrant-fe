import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as sentry from './sentry-init'
import { i18n } from './i18n/i18n-setup'

Vue.config.productionTip = false

sentry.init()

window.instance = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
