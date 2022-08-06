export type IAuthState = {
  loading: boolean;
  error: string;
  token: string;
  isAuth: boolean;
};

export interface IAuthRequest {
  email: string;
  password: string;
  callback: () => void;
}
