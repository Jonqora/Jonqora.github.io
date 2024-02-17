/* sem-ver-me.js by Ellen Lloyd 2021

PURPOSE | Generates a "version number" from time relative to a set date

CONFIG | set [Y, M, D] values with updateSpeed:
- Major version increments yearly or every Y years
- Minor version increments monthly or every M months
- Patch version increments daily or every D days */

/*======== Config ========*/
// const startDate = new Date("September 7, 2021");
const startDate = new Date("February 4, 2024");
const startRelease = 3;  //Major version number corresponding to above date
const updateSpeed = [1, 1, 3];  //Larger numbers = slower updates


/*======== Constants ========*/
const currentDate = new Date();
let semVerElement =  document.getElementsByClassName('sem-ver-me')[0];


/*======== Functions ========*/

// Count number of whole calendar years between start, end date
function countWholeYears(start, end) {
    let startDay = start.getDate();
    let startMonth = start.getMonth();
    let startYear = start.getFullYear();
    let endDay = end.getDate();
    let endMonth = end.getMonth();
    let endYear = end.getFullYear();

    let yearDiff = endYear - startYear;
    if (endMonth < startMonth ||
      (endMonth === startMonth && endDay < startDay)) {
        yearDiff -= 1;
      }
    return yearDiff
}

// Count remaining months after last whole year between start, end date
function countRemainingMonths(start, end) {
    let startDay = start.getDate();
    let startMonth = start.getMonth();
    let endDay = end.getDate();
    let endMonth = end.getMonth();

    let monthDiff = (endMonth - startMonth);
    if (endDay < startDay) {
      monthDiff -= 1;
    }
    if (monthDiff < 0) {
      monthDiff += 12;
    }
    return monthDiff
}

// Count remaining days after last full month between start, end date
function countRemainingDays(start, end) {
    let startDay = start.getDate();
    let endDay = end.getDate();

    let dayDiff = (endDay - startDay);
    if (dayDiff < 0) {
      let lastOfPrevMonth = new Date(endDay);
      lastOfPrevMonth.setDate(0);
      dayDiff += lastOfPrevMonth.getDate();  // add num days in prev month
    }
    return dayDiff
}


/*======== Implementation ========*/

let major = startRelease +
Math.floor(countWholeYears(startDate, currentDate) / updateSpeed[0]);
let minor =
Math.floor(countRemainingMonths(startDate, currentDate) / updateSpeed[1]);
let patch =
Math.floor(countRemainingDays(startDate, currentDate) / updateSpeed[2]);

let semVerText = "v"
+ (major).toString() + "."
+ (minor).toString() + "."
+ (patch).toString()

semVerElement.innerHTML = semVerText;
