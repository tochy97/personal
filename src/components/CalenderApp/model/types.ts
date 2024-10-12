import { RefObject } from "react";

export type Day = {
    index?: number,
    day?: string
};

export type Week = {
    index?: number,
    days: Array<Day>
};

export type Month = {
    ref: RefObject<HTMLDivElement>,
    weeks: Array<Week>,
    month: string,
    index: number,
    year: number,
    isLeap: boolean,
    popView: Function
};

export type Past = Array<Month>

export type PastPromise = Promise<Past>

export type displayRef = {
    ref: RefObject<HTMLDivElement>;
    value: string;
}