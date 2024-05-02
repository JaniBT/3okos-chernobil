import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locale/en.json';
import huTranslation from './locale/hu.json';

i18n
    .use(initReactI18next)
    .init({
        resources:{
            en: {
                translation: enTranslation,
            },
            hu: {
                translation: huTranslation,
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;