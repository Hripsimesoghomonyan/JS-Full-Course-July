"use strict"

function getDay(dateString) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

console.log(getDay("12/07/2016"));  
console.log(getDay("09/04/2016"));  
console.log(getDay("12/08/2011")); 
