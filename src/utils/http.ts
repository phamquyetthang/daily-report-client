/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';

const HOST_API = process.env.REACT_APP_API_HOST;

const httpService = axios.create({
  baseURL: HOST_API,
  withCredentials: true,
});

interface IError {
  code?: string;
  message: string;
}

export interface ICustomErrAxios extends IError {
  status?: number;
}

httpService.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error: AxiosError): Promise<ICustomErrAxios> {
    // Do something with response error
    const errData = error.response?.data as IError;
    return Promise.reject({
      status: error.response?.status,
      message: errData?.message || JSON.stringify(errData),
      code: errData.code || '',
    });
  },
);

export const setAuthToken = (authToken: string) => {
  localStorage.setItem('token', authToken);
  httpService.defaults.headers = {
    ...httpService.defaults.headers,
    options: {
      'x-auth-token': authToken,
    },
  };
};

export default httpService;
