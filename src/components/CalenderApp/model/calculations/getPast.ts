import { isLeap } from '../constants';
import { Past, PastPromise } from '../types';
import getYear from './getYear';

/**
 * Loop to get all years as Array
 * @param endYear
 * @returns Past
 */
export default function getPast(endYear: number): PastPromise {
  return new Promise((resolve, reject) => {
    let output: Past = [];
  
    const today = new Date();
  
    let startYear: number = today.getFullYear();
    let leap: boolean = isLeap(startYear);
  
    while (startYear >= endYear) {
      output = [...getYear(today, leap, startYear), ...output];
      startYear--;
    }
    console.log(output)
    resolve(output);
  })
}
