export type IAuthState = {
  error: string;
  token: string;
  isAuth: boolean;
};

export interface IAuthRequest {
  email: string;
  password: string;
}
