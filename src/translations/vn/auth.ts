import { DotNestedKeys } from '../../utils/type';

const authTranslate = {
  title: {
    login: 'Đăng nhập',
    register: 'Đăng ký',
    forgot: "Quên mật khẩu"
  },
  welcome: {
    login: 'Welcome Back',
    register: 'User email in Slack',
    forgot: 'Email will send to you by slack',
  },
  requiredFeild: 'Không được bỏ trống',
  invalid: 'Trường không hợp lệ !',
  rememberMe: 'Nhớ tài khoản',
  forgot: 'Quên mật khẩu?',
  getNewPass: 'Lấy mật khẩu',
};

export type AuthTransLateType = typeof authTranslate;

export type AuthTransLateKeyType = DotNestedKeys<AuthTransLateType>;

export default authTranslate;
