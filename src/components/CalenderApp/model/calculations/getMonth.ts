import React from 'react'
import { Month, Week } from '../types'
import { daysArray, makeSunday, monthMax, monthsArray } from '../constants';
import getWeek from './getWeek';

export default function getMonth(date: Date, monthIndex: number, leap: boolean, yearIndex: number): Month {
    let dayIndex: number = date.getDate();
    let indexDayofWeek: number = date.getDay();
    const maxIndex: number = monthMax(monthIndex, leap)

    let stringMonth: string = monthsArray[monthIndex];
    let stringDay: string = daysArray[indexDayofWeek];

    const output: Month = {
        ref: React.createRef(),
        weeks: [],
        month: stringMonth,
        index: monthIndex,
        year: yearIndex,
        isLeap: leap,
        popView: function (this: Month) {
            this.ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        }
    };


    // Find index of 1st sunday for the month
    while (dayIndex > 1) {
        dayIndex -= 7;
    }
    [dayIndex, stringDay] = makeSunday(stringDay, dayIndex);

    let weekInput: Week;
    while (dayIndex < maxIndex) {
        weekInput = getWeek(dayIndex, stringDay, maxIndex);
        output.weeks.push(weekInput);
        dayIndex += 7;
    }
    return output;
}
