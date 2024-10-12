import React from 'react'
import { Day, Week } from '../types'
import { daysArray } from '../constants';

export default function getWeek(dayIndex: number, stringDay: string, maxIndex: number): Week {
    const output: Week = {
        days: []
    };

    if (dayIndex <= -7) {
        return output;
    }

    const nextSundayIndex: number = dayIndex + 7;
    let indexDayofWeek: number = 0;
    // Fill empty objects for negatives since we start on the Sunday
    while (dayIndex < 1) {
        // Invalid day placeholder
        dayIndex++;
        indexDayofWeek++;
        output.days.push({})
    }

    let dayInput: Day;
    while ((dayIndex < nextSundayIndex) && (dayIndex <= maxIndex)) {
        stringDay = daysArray[indexDayofWeek];
        dayInput = {
            index: dayIndex,
            day: stringDay
        };
        output.days.push(dayInput);
        dayIndex++;
        indexDayofWeek++;
        if (indexDayofWeek === 7) {
            indexDayofWeek = 0;
        }
    }

    // Fill empty objects until there are 7
    while (output.days.length < 7) {
        // Invalid day placeholder
        dayIndex++;
        output.days.push({})
    }
    return output;
}
