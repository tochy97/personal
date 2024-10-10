export type Day = {
    index?: number,
    day?: string
};

export type Week = {
    index?: number,
    days: Array<Day>
};

export type Month = {
    weeks: Array<Week>,
    month: string,
    index: number
};

export type Year = {
    months: Array<Month>,
    index: number,
    isLeap: boolean
}

export type Past = Array<Year>

export type PastPromise = Promise<Past>