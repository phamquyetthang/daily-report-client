import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './translations/en';
import VN from './translations/vn';

const resources = {
  vn: { translation: VN },
  en: { translation: EN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vn',
  keySeparator: '.',
});

export default i18n;
