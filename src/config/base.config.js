export const APP_PROP_APP_NAME = process.env.VUE_APP_NAME
export const APP_PROP_CLIENT = 'web'
export const APP_PROP_VERSION = process.env.VUE_APP_VERSION
export const APP_BASE_URL = process.env.BASE_URL
export const APP_BASE_FULL_URL = location.origin + APP_BASE_URL
export const APP_SENTRY_DSN =
  'https://b7939d216d394d4f932cdfc0529cea47@sentry.io/1453850'
export const APP_SENTRY_RELEASE = `${APP_PROP_APP_NAME}@${APP_PROP_VERSION}`
