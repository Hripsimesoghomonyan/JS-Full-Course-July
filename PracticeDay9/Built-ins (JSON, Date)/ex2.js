"use strict"

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dayOfYear(dateString) {
    const [month, day, year] = dateString.split('/').map(Number);
    const daysInMonth = [0, 31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let dayNumber = day;
    for (let i = 1; i < month; i++) {
        dayNumber += daysInMonth[i];
    }
    
    return dayNumber;
}


console.log(dayOfYear("12/13/2020"));  
console.log(dayOfYear("12/17/2020"));  
console.log(dayOfYear("11/16/2020"));  
console.log(dayOfYear("1/9/2019")); 
console.log(dayOfYear("3/1/2004"));  
console.log(dayOfYear("12/31/2000")); 