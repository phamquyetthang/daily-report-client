import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addSnackBar } from 'src/services/app/reducer';
import { getReportsApi } from 'src/services/report/api';
import IReport from 'src/services/report/type';
import ReportCard from '../components/ReportCard';

const Reports = () => {
  const [reports, setReports] = useState<IReport[]>([]);
  const dispatch = useAppDispatch();
  const getReports = useCallback(async () => {
    try {
      const data = await getReportsApi();
      setReports(data);
    } catch (error) {
      dispatch(addSnackBar({ type: 'error', message: JSON.stringify(error) }));
    }
  }, []);

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div>
      {reports.map((report) => (
        <ReportCard
          key={report._id}
          report={report}
        ></ReportCard>
      ))}
    </div>
  );
};

export default Reports;
