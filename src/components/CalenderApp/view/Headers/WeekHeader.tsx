import { ReactElement } from 'react'
import { weekContainer, weekHeaderContainer } from '../classNames';
import { daysArray } from '../../model/constants';

/**
 * Build week header
 * @returns 
 */
export default function WeekHeader(): ReactElement<any, any> {
  return (
    <div className={weekHeaderContainer}>
      {daysArray.map((element, index) => (
        <div className={weekContainer} key={index}>
          {element}
        </div>
      ))}
    </div>
  );
}