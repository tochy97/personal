import React, { ReactElement } from 'react'
import Modal from '../../../Modal/Modal';
import { dayContainer } from '../../model/classNames';
import { stack } from '../../../classNames';

type Props = {
  value?: number, 
  month: string, 
  year: number, 
}

export default function Days({ value, month, year }: Props): ReactElement<any, any> {
  let enableOnClick = false;
  if (typeof value !== "undefined") {
    enableOnClick = true;
  }
  return (
        <Modal
          enableOnClick={enableOnClick}
          trigger={value && <div className={dayContainer}>{value}</div>}
          header={
            <>
              <div>
                {month} {value}, {year}
              </div>
            </>
          }
          content={value}
          closeButtonclass={"justify-self-center fixed bottom-[4em]"}
          modalContainerClass={stack + " fixed"}
        />
  );
}