import { daysArray, monthMax, monthsArray, nextMonth } from '../model/constants';
import { Month, Year } from '../model/types'
import getMonth from './getMonth';

/**
 * 
 * @param today 
 * @param leap 
 * @param yearIndex 
 * @returns Year
 */
export default function getYear(today: Date, leap: boolean, yearIndex: number): Year {
    const output: Year = {
        months: [],
        index: yearIndex,
        isLeap: leap
    };

    let monthIndex: number = today.getMonth();
    const originalIndex: number = monthIndex;
    let monthInput:Month;


    while(monthIndex <= 11) {
        monthInput = getMonth(today, monthIndex, leap);
        output.months.push(monthInput);
        monthIndex++;
        today = new Date(yearIndex, monthIndex, 1)
    }
    monthIndex = originalIndex;
    while(monthIndex >= 0) {
        monthInput = getMonth(today, monthIndex, leap);
        output.months.unshift(monthInput);
        monthIndex--;
        today = new Date(yearIndex, monthIndex, monthMax(monthIndex, leap))
    }
    return output;
}
