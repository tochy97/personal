import React from 'react'
import { Month, Week } from '../types'
import { daysArray, makeSunday, monthMax, monthsArray } from '../constants';
import getWeek from './getWeek';
import { NamedTupleMember } from 'typescript';

export default function getMonth(maxIndex: number, dayIndex: number, monthIndex: number, leap: boolean, yearIndex: number, stringDay?: string): Month {

    let stringMonth: string = monthsArray[monthIndex];

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
    [dayIndex, stringDay] = makeSunday(dayIndex, stringDay);

    let weekInput: Week;
    while (dayIndex < maxIndex) {
        weekInput = getWeek(dayIndex, stringDay, maxIndex);
        if (weekInput.days.length > 0 && (typeof weekInput.days[0]?.day !== "undefined" || typeof weekInput.days[6]?.day !== "undefined")) {
            output.weeks.push(weekInput);
        }
        dayIndex += 7;
    }
    return output;
}
