const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

function dayOfYear(date: string): number {
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const [y, m, d] = date.split('-');
    if (isLeapYear(Number(y))) {
        ++months[2];
    }

    let days = 0;
    for (let i = 0; i < Number(m); ++i) {
        days += months[i];
    }
    return days + Number(d);
};