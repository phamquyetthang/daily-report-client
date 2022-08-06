import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postService } from '../../utils/http';
import { addSnackBar } from '../app';
import { IAuthRequest, IAuthState } from './types';

const initialState: IAuthState = {
  loading: false,
  error: '',
  token: '',
  isAuth: false,
};

export const signInService = createAsyncThunk(
  'auth/login',
  async ({ email, password, callback }: IAuthRequest, thunkAPI) => {
    try {
      const response = await postService('/auth/signIn', {
        email,
        password,
      });
      callback();
      thunkAPI.dispatch(addSnackBar({ type: 'info', message: 'Login successfully' }));
      return response.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const signUpService = createAsyncThunk(
  'auth/register',
  async ({ email, password, callback }: IAuthRequest, thunkAPI) => {
    try {
      const response = await postService('/user/register', {
        email,
        password,
      });
      callback();
      thunkAPI.dispatch(addSnackBar({ type: 'info', message: 'Create account successfully' }));
      return response.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  },
);
export const forgotService = createAsyncThunk(
  'auth/forgot',
  async ({ email }: { email: string }, thunkAPI) => {
    try {
      const response = await postService('/auth/forgot', {
        email,
      });
      thunkAPI.dispatch(
        addSnackBar({ type: 'info', message: 'Your new password will be send in slack.' }),
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state: IAuthState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setToken: (state: IAuthState, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    clearError: (state: IAuthState) => {
      state.error = '';
    },
    logout: (state: IAuthState) => {
      state.token = '';
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(signInService.fulfilled, (state: IAuthState, { payload }: PayloadAction<string>) => {
        state.token = payload;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      })
      .addCase(signInService.rejected, (state: IAuthState, { payload }) => {
        state.error = JSON.stringify(payload);
        state.isAuth = false;
        state.loading = false;
      })
      .addCase(signUpService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(signUpService.fulfilled, (state: IAuthState, { payload }: PayloadAction<string>) => {
        state.token = payload;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      })
      .addCase(signUpService.rejected, (state: IAuthState, { payload }) => {
        state.error = JSON.stringify(payload);
        state.loading = false;
        state.isAuth = false;
      })
      .addCase(forgotService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(forgotService.fulfilled, (state: IAuthState) => {
        state.error = '';
        state.loading = false;
      })
      .addCase(forgotService.rejected, (state: IAuthState, { payload }) => {
        state.error = JSON.stringify(payload);
        state.loading = false;
      });
  },
});

export const {
  setLoading, setToken, clearError, logout,
} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
