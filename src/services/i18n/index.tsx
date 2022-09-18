/* eslint-disable no-prototype-builtins */
import { Platform, NativeModules } from 'react-native'
import I18n from 'i18n-js'

// Import the Dictionary
import en from './en-US'
import pt from './pt-BR'
import fr from './fr-FR'

const normalizeTranslate: any = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  fr_FR: 'fr_FR',
}

// Get device language pattern
export const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale // Adquire o idioma no device iOS
    : NativeModules.I18nManager.localeIdentifier // Adquire o idioma no device Android
}

// Languagues Support
I18n.translations = {
  en_US: en,
  pt_BR: pt,
  fr_FR: fr,
}

// Set the Language
export const setLanguageToI18n = (lang = null) => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[lang === null ? language : lang]

  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'fr_FR')
}

setLanguageToI18n()

// Translate the words
export const translate = (key: any) => {
  return I18n.t(key).includes('[missing') === false ? I18n.t(key) : key
}
