import React from 'react'
import { Month, Week } from '../model/types'
import { daysArray, makeSunday, monthMax, monthsArray } from '../model/constants';
import getWeek from './getWeek';

export default function getMonth(date: Date, monthIndex: number, leap: boolean): Month {
    let dayIndex: number = date.getDate();
    let indexDayofWeek: number = date.getDay();
    const maxIndex: number = monthMax(monthIndex, leap)

    let stringMonth: string = monthsArray[monthIndex];
    let stringDay: string = daysArray[indexDayofWeek];

    const output: Month = {
        weeks: [],
        month: stringMonth,
        index: monthIndex
    };


    // Find index of 1st sunday for the month
    while (dayIndex > 1) {
        dayIndex -= 7;
    }
    [dayIndex, stringDay] = makeSunday(stringDay, dayIndex);

    let weekInput: Week;
    while(dayIndex < maxIndex) {
        weekInput = getWeek(dayIndex, stringDay, maxIndex);
        output.weeks.push(weekInput);
        dayIndex += 7;
    }
    return output;
}
