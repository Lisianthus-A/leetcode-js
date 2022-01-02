// 判断是否闰年
const isLeapYear = (y: number) => {
    return y % 400 === 0 ||
        y % 4 === 0 && y % 100 !== 0;
}

// 1970.1.1  --> Thursday
// 根据给定日期算出与 1970.1.1 相差多少天
// 根据差值返回该天是星期几
function dayOfTheWeek(day: number, month: number, year: number): string {
    // 每个月的天数
    const dayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 年份差距天数
    let diff = 0;
    for (let y = 1970; y < year; ++y) {
        if (isLeapYear(y)) {
            diff += 366;
        } else {
            diff += 365;
        }
    }

    // 月份差距天数
    for (let m = 1; m < month; ++m) {
        diff += dayOfMonth[m];
    }
    if (month > 2 && isLeapYear(year)) {
        diff += 1;
    }

    // 日期差距天数
    diff += day - 1;

    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(4 + diff) % 7]
};