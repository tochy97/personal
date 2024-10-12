import React, { ReactElement } from 'react'
import { weekContainer, weekHeaderContainer } from '../../model/classNames';
import { daysArray } from '../../model/constants';

type Props = {}

export default function WeekHeader({}: Props): ReactElement<any, any> {
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