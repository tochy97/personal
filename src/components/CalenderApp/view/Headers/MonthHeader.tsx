import { monthHeader } from '../../model/classNames';

type Props = { 
    month: string,
    year: number
};

/**
 * Build month header
 * @param month 
 * @param year 
 * @returns 
 */
export default function MonthHeader({ month, year }: Props) {
  return (
        <div className={monthHeader}>
            <p>{year}</p>
            <p>{month}</p>
        </div>
    );
}