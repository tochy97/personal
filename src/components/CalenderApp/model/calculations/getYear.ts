import { daysArray, monthMax, monthsArray, nextMonth } from '../constants';
import { Month, Past } from '../types'
import getMonth from './getMonth';

/**
 * 
 * @param today 
 * @param leap 
 * @param yearIndex 
 * @returns Year
 */
export default function getYear(today: Date, leap: boolean, yearIndex: number): Past {
    const output: Past = [];

    let monthIndex: number = today.getMonth();
    const originalIndex: number = monthIndex;
    let monthInput:Month;


    while(monthIndex <= 11) {
        monthInput = getMonth(today, monthIndex, leap, yearIndex);
        output.push(monthInput);
        monthIndex++;
        today = new Date(yearIndex, monthIndex, 1)
    }
    monthIndex = originalIndex;
    while(monthIndex >= 0) {
        monthInput = getMonth(today, monthIndex, leap, yearIndex);
        output.unshift(monthInput);
        monthIndex--;
        today = new Date(yearIndex, monthIndex, monthMax(monthIndex, leap))
    }
    return output;
}
