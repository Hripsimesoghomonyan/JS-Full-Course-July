"use strict"

function longestTime(h, m, s) {
    const hoursInSeconds = h * 3600;
    const minutesInSeconds = m * 60;

    const maxDurationInSeconds = Math.max(hoursInSeconds, minutesInSeconds, s);

    return maxDurationInSeconds;
}

console.log(longestTime(1, 59, 3598));  
console.log(longestTime(2, 300, 15000)); 
console.log(longestTime(15, 955, 59400)); 
