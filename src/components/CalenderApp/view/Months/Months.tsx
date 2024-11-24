import React, { ReactElement } from 'react'
import { monthContainer, monthGrid, monthHeader } from '../classNames';
import MonthHeader from '../Headers/MonthHeader';
import WeekHeader from '../Headers/WeekHeader';
import { Month } from '../../model/types';
import Days from '../Days/Days';

type Props = {
  year: number;
  thisMonth: Month
};

/**
 * Build months with MonthsHeader and WeekHeaders
 * Map input from thisMonths to Days
 * @param year 
 * @param thisMonth 
 * @returns 
 */
export default function Months({ year, thisMonth }: Props): ReactElement<any, any> {
  const month = thisMonth.month;

  return (
    <div className={monthContainer}>
      <MonthHeader month={month} year={year} />
      <WeekHeader />
      <div className={monthGrid}>
        {thisMonth.weeks.map((element, index) =>
          element.days.map((inner, innerIndex) => (
            <Days
              key={`${index} ${inner?.index} ${innerIndex}`}
              value={inner?.index}
              month={month}
              year={year}
              monthIndex={thisMonth.index}
            />
          ))
        )}
      </div>
    </div>
  );
}