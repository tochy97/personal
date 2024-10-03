import { isLeap } from './common/constants';
import { Past, Year } from './common/types';
import getYear from './getYear';

/**
 * Loop to get all years as Array
 * @param endYear
 * @returns Past
 */
export default function getPast(endYear: number): Past {
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
console.log(output)
  return output;
}
