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
  return (
        <Modal
          trigger={<div className={dayContainer}>{value}</div>}
          header={
            <>
              <div className="mr-3">
                {month} {value}, {year}
              </div>
            </>
          }
          content={value}
          closeButtonclass={"justify-self-center fixed bottom-[15px]"}
          modalContainerClass={stack + " fixed"}
        />
  );
}