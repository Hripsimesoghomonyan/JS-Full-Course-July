"use strict"

function monthsInterval(dateStart, dateEnd) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const startMonth = dateStart.getMonth();
    const endMonth = dateEnd.getMonth();
    const startYear = dateStart.getFullYear();
    const endYear = dateEnd.getFullYear();

    const result = [];

    for (let i = startYear; i <= endYear; i++) {
        for (let j = (i === startYear ? startMonth : 0); j <= (i === endYear ? endMonth : 11); j++) {
            const monthName = months[j];
            if (!result.includes(monthName)) {
                result.push(monthName);
            }
        }
    }

    return result;
}


let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));  

let december = new Date(2017, 11, 1);
let january2 = new Date(2018, 0, 1);
console.log(monthsInterval(december, january2));  

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018));  