import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslateKeyType } from '../translations/vn';

const useAppTranslate = () => {
  const { t } = useTranslation();
  const word = useCallback((title: TranslateKeyType) => t(title), [t]);
  return word;
};

export default useAppTranslate;
