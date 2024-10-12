import { isLeap } from '../constants';
import { Past, PastPromise } from '../types';
import getYear from './getYear';

/**
 * Get all years starting from today
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
      // Add the new year in front of the existing array
      output = [...getYear(today, leap, startYear), ...output];
      startYear--;
    }
    resolve(output);
  })
}
