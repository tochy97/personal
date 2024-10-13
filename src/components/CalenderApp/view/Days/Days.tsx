import { ReactElement } from 'react'
import Modal from '../../../Modal/Modal';
import { dayContainer } from '../../model/classNames';
import { stack } from '../../../classNames';
import NewYorkTimes from '../NewYorkTimes/NewYorkTimes';

type Props = {
  value?: number,
  month: string,
  year: number,
  monthIndex: number
}

/**
 * Builds each day as a modal
 * @param value 
 * @param month 
 * @param year 
 * @param monthIndex
 * @returns 
 */
export default function Days({ value, month, year, monthIndex }: Props): ReactElement<any, any> {

  // To block empty days from having modal access
  let enableOnClick = false;
  if (typeof value !== "undefined") {
    enableOnClick = true;
  }
  return (
    <>
      <Modal
        enableOnClick={enableOnClick}
        trigger={
          value &&
          <div className={dayContainer}>{value}</div>
        }
        header={
          value &&
          <>
            <div>
              {month} {value}, {year}
            </div>
          </>
        }
        content={
          value &&
          <>
            <NewYorkTimes day={year + "" + String(monthIndex + 1).padStart(2, '0') + "" + String(value).padStart(2, '0')} search='' />
          </>
        }
        closeButtonclass={"justify-self-center fixed bottom-[4em]"}
        modalContainerClass={stack + " fixed"}
      />
    </>
  );
}