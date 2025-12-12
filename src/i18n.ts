  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import LanguageDetector from 'i18next-browser-languagedetector';

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'ru',
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: {
            "Media": "Media",
            "Music": "Music",
            "News": "News",
            "Contact": "Contact",
            "Merch": "Merch"
          },
        },
        ru: {
          translation: {
            "Media": "Медиа",
            "Music": "Музыка",
            "News": "Новости",
            "Contact": "Фидбек",
            "Merch": "Мерч"
          },
        },
      },
    });

  export default i18n;