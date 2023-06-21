import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationAR from './locales/ar.json';
// Importez d'autres fichiers de traduction pour les langues supplémentaires

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
   ar: {
    translation: translationAR,
  },
  // Ajoutez d'autres langues et fichiers de traduction ici
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la langue actuelle n'a pas de traduction
    interpolation: {
      escapeValue: false,
       // Permet d'utiliser du HTML dans les traductions si nécessaire
    },
    detection: true,
  });

export default i18n;