import { ISnack } from '../../utils/constants/common';

export type ISnackBar = {
  id: string;
  type: ISnack;
  message: string;
};

export interface IAppError {
  error: boolean;
  title: string;
  content: string;
  isBack?: boolean;
  navigate?: string;
}

export interface IProjectApp {
  name: string;
  id: string;
}

export type IAppState = {
  projectId: string;
  projectName: string;
  loading: boolean;
  spinLoading: boolean;
  snackBar: ISnackBar[];
  theme: 'light' | 'dark';
  language: 'vn' | 'en';
  projects: Array<IProjectApp>;
  error: IAppError;
};
