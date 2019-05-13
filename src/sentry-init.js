import * as Sentry from '@sentry/browser'
// import * as Integrations from '@sentry/integrations'
import AppConst from '@/config'

export function init(Vue) {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: AppConst.APP_SENTRY_DSN,
      release: process.env.VUE_APP_RELEASE,
      environment: process.env.VUE_APP_ENV,
      integrations: [
        // npm 版本用法
        // new Integrations.Vue({
        //   Vue,
        //   attachProps: true
        // })
        // cdn 版本用法
        new Sentry.Integrations.Vue({
          Vue,
          attachProps: true
        })
      ]
      // beforeSend(event) {
      //   // Check if it is an exception, and if so, show the report dialog
      //   if (event.exception) {
      //     Sentry.showReportDialog({ eventId: event.event_id })
      //   }
      //   return event
      // }
    })
  }
}
