import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18next
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('currentLanguage') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/src/assets/i18n/translations/{{lng}}.json`,
      requestOptions: { cache: 'no-cache' },
    },
    keySeparator: false,
  });

export default i18next;
