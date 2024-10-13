import { daysArray, getNextMonth, getPrevMonth, isLeap, monthMax } from '../constants';
import { Month, Past } from '../types'
import getMonth from './getMonth';

/**
 * Get full year starting at any point
 * @param today 
 * @param leap 
 * @param yearIndex 
 * @returns Year
 */
export default function getYear(today: Date): Past {
    const output: Past = [];

    let yearIndex: number = today.getFullYear();
    let monthIndex: number = today.getMonth();
    let dayIndex: number = today.getDate();
    const originalIndex: number = monthIndex;
    let monthInput:Month;
    let leap: boolean = isLeap(yearIndex);
    let maxIndex: number = monthMax(monthIndex, leap);
    let stringDay: string | undefined = daysArray[today.getDay()];

    // Going backwards
    while(monthIndex <= 11) {
        monthInput = getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay);
        output.push(monthInput);
        monthIndex++;
        stringDay = getNextMonth(monthInput.weeks, maxIndex);
        maxIndex = monthMax(monthIndex, leap);
        dayIndex = 1;
    }

    // Reset to original and start going backwards
    monthIndex = originalIndex - 1;
    maxIndex = monthMax(monthIndex, leap);
    dayIndex = monthMax(monthIndex, leap);
    stringDay = getPrevMonth(output[0].weeks)

    // Going forwards
    while(monthIndex >= 0) {
        monthInput = getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay);
        output.unshift(monthInput);
        monthIndex--;
        maxIndex = monthMax(monthIndex, leap);
        dayIndex = monthMax(monthIndex, leap);
        stringDay = getPrevMonth(monthInput.weeks)
    }
    return output;
}
