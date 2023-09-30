"use strict"

function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    
    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        return "Invalid Month Number";
    }
}

// Example usage:
console.log(getMonthName(3));  
console.log(getMonthName(6));  
console.log(getMonthName(13)); 
