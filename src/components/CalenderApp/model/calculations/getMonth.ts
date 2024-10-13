import React from 'react'
import { Month, Week } from '../types'
import { makeSunday, monthsArray } from '../constants';
import getWeek from './getWeek';

/**
 * Get the month starting from the 1st day
 * @param maxIndex 
 * @param dayIndex 
 * @param monthIndex 
 * @param leap 
 * @param yearIndex 
 * @param stringDay 
 * @returns 
 */
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
        // Check if the array is empty and if the 1st index has a valid day or if the last index has a valid day
        if (weekInput.days.length > 0 && (typeof weekInput.days[0]?.day !== "undefined" || typeof weekInput.days[6]?.day !== "undefined")) {
            output.weeks.push(weekInput);
        }
        dayIndex += 7;
    }
    return output;
}
