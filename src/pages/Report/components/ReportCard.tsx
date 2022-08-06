import React, { FC, useMemo } from 'react';
import IReport from '../../../services/report/type';
import moment from 'moment';
import clsx from 'clsx';
import { ScheduleTagWrapper } from '../style';
interface IProps {
  report: IReport;
  isSelected?: boolean;
}
const ReportCard: FC<IProps> = ({ report, isSelected }) => {
  const typeDate: 1 | 2 | 3 = useMemo(() => {
    if (moment().isSame(report.date, 'D')) {
      return 1;
    }
    if (moment().isBefore(report.date)) {
      return 2;
    }
    return 3;
  }, []);

  return (
    <div
      className={clsx(
        'bg-white hover:bg-green-100 border border-gray-200 p-3 m-1 relative',
        { 'border-blue-500': typeDate === 1 },
        { 'border-yellow-500': typeDate === 2 },
      )}
    >
      {typeDate === 2 && <ScheduleTagWrapper> schedule</ScheduleTagWrapper>}

      <div className="m-2 text-justify text-sm">
        <p className="text-right text-xs">{moment(report.date).format('L')}</p>
        <h2 className="font-bold text-lg h-2 mb-6">Done Yesterday</h2>
        {report.yesterday.map((yesterday, key) => (
          <div
            className="text-xs mb-1"
            key={`${report._id}_yesterday_${key}`}
          >
            <h3 className="font-bold text-sm">{yesterday.project}:</h3>
            <p>{yesterday.contain}</p>
          </div>
        ))}
        {report.re_open_bug && (
          <p>
            <i>
              <b>🐞 Re-open bug: </b>
            </i>
            {report.re_open_bug}
            <br />
            <span>
              <i>Reason</i>: {report.reason_bug}
            </span>
          </p>
        )}

        {report.highlight_yesterday && (
          <p>
            <i>
              <b>⚡ Highlight : </b>
            </i>
            {report.highlight_yesterday}
          </p>
        )}

        <h2 className="font-bold text-lg h-2 mb-6 mt-8">Plan Today</h2>
        {report.today.map((today, key) => (
          <div
            className="text-xs"
            key={`${report._id}_today_${key}`}
          >
            <h3 className="font-bold text-sm">{today.project}:</h3>
            <p>{today.contain}</p>
          </div>
        ))}

        {report.highlight_today && (
          <p>
            ⚡{' '}
            <i>
              <b>Highlight :</b>
            </i>{' '}
            {report.highlight_today}
          </p>
        )}
      </div>
      {typeDate !== 3 && isSelected && (
        <div className="w-full text-right mt-4">
          <button className="text-green-400 uppercase font-bold text-sm">Edit</button>
        </div>
      )}
    </div>
  );
};

export default ReportCard;
