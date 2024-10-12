import getMonth from "../model/calculations/getMonth";
import getPast from "../model/calculations/getPast";
import getYear from "../model/calculations/getYear";

it("Past: Every week has 7 days", async () => {
    const past = await getPast(1997)

    let allSevens = true;
    past.forEach(month => {
        month.weeks.forEach((week) => {
            if (week.days.length !== 7) {
                allSevens = false;
            }
        })
    });

    expect(allSevens).toBe(true);
});

it("Year: 2024 starts on a Monday", () => {
    const date = new Date(2024,10,30);
    const year = getYear(date);
    const day = year[0].weeks[0].days.find((ele) => ele.index === 1 )?.day;
    expect(day).toBe("Monday");
})


it("Year: 1997 ends on a Wednesday", () => {
    const date = new Date(1997,10,30);
    const year = getYear(date);
    const day = year[0].weeks[0].days.find((ele) => ele.index === 1 )?.day;
    expect(day).toBe("Wednesday");
})


it("Month: No empty weeks", () => {
    const month = getMonth(31, 28, 7, false, 1997, "Monday");
    let emptyWeek = true;
    let notEmptyweeks = 0;
    month.weeks.forEach(element => {
        element.days.forEach((ele) => {
            if(Object.keys(ele).length !== 0) {
                emptyWeek = false;
            }
        })
        if (!emptyWeek) {
            notEmptyweeks += 1;
        }
    });
    expect(month.weeks.length).toBe(notEmptyweeks);
})