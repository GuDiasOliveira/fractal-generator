import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPTBR from './locales/pt-BR/translation.json';
import translationES from './locales/es/translation.json';
import translationIT from './locales/it/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';
import translationZH from './locales/zh/translation.json';
import translationKO from './locales/ko/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  'pt-BR': {
    translation: translationPTBR
  },
  es: {
    translation: translationES
  },
  it: {
    translation: translationIT
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  },
  zh: {
    translation: translationZH
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
