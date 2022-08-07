import httpService from 'src/utils/http';
import IReport from './type';

export const getReportsApi = async (): Promise<IReport[]> => {
  return await httpService.get(`reports`);
};
