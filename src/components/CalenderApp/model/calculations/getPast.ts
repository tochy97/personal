import { isLeap } from '../constants';
import { Past, PastPromise, Year } from '../types';
import getYear from './getYear';

/**
 * Loop to get all years as Array
 * @param endYear
 * @returns Past
 */
export default function getPast(endYear: number): PastPromise {
  return new Promise((resolve, reject) => {
    const output: Past = [];
  
    const today = new Date();
  
    let startYear: number = today.getFullYear();
    let leap: boolean = isLeap(startYear);
    let yearInput: Year;
  
    while (startYear >= endYear) {
      yearInput = getYear(today, leap, startYear);
      output.unshift(yearInput);
      startYear--;
    }
  
    resolve(output);
  })
}
