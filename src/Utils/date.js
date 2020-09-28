
const date = new Date();
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
const months =  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
const monthNumber = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
const month = months[date.getMonth()];
const year = date.getFullYear();
const weekDay = weekDays[date.getDay()];

export {
    day,
    monthNumber,
    month,
    year,
    weekDay
}