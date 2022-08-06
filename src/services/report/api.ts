import { getService } from '../../utils/http';
import IReport from './type';

export const getReportsApi = async (): Promise<IReport[]> => {
  return await getService(`reports`);
};
