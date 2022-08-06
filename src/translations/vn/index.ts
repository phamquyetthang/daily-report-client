import authTranslate from './auth';
import welcomeTranslate from './welcome';
import commonTranslate from './common';
import docTranslate from './doc';
import taskTranslate from './task';
import { DotNestedKeys } from '../../utils/type';
const VN = {
  name: 'vn',
  commonTranslate,
  authTranslate,
  welcomeTranslate,
  docTranslate,
  taskTranslate,
};

export default VN;

export type TranslateType = typeof VN;
export type TranslateKeyType = DotNestedKeys<TranslateType>;
