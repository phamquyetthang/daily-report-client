import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setAuthToken } from 'src/utils/http';
import { IAuthState } from './types';

const initialState: IAuthState = {
  error: '',
  isAuth: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setTokenAction: (state: IAuthState, { payload }: PayloadAction<string>) => {
      setAuthToken(payload);
      state.token = payload;
      state.isAuth = true;
    },
  },
});

const { reducer, actions } = authSlice;
export const { setTokenAction } = actions;

export default reducer;
