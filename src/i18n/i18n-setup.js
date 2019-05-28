import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import Cookies from 'js-cookie'
import langs from './lang'

Vue.use(VueI18n)

const defaultLang = 'en'

export const i18n = new VueI18n({
  locale: defaultLang, // 设置语言环境
  fallbackLocale: defaultLang, // 语言设置失败时回退的语言
  messages: {
    en
  } // 设置语言环境信息
})

const loadedLanguages = ['en'] // 我们的预装默认语言

function setI18nLanguage(lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    Cookies.set('lang', lang, { expires: 30 })
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(
        msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        }
      )
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

;(function init() {
  const currentLanguage = Cookies.get('lang')
  if (currentLanguage) {
    return loadLanguageAsync(currentLanguage)
  }
  const browserLanguage = (navigator.language || 'en').toLowerCase()
  const matchedBrowserLanguage = Object.keys(langs).find(lang => {
    const re = new RegExp(`^${lang}`, 'i')
    return re.test(browserLanguage)
  })
  if (matchedBrowserLanguage) {
    return loadLanguageAsync(matchedBrowserLanguage)
  }
  return loadLanguageAsync(defaultLang)
})()
