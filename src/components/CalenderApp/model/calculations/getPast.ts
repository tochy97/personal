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
    let date = new Date();

    let startYear: number = date.getFullYear();
  
    while (startYear >= endYear) {
      // Add the new year in front of the existing array
      output = [...getYear(date), ...output];
      startYear--;
      date = new Date(startYear,1,1);
    }
    console.log(output)
    resolve(output);
  })
}
