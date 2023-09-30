"use strict"

function threeDaysAgo(date) {
    const threeDaysAgoDate = new Date(date);
    threeDaysAgoDate.setDate(threeDaysAgoDate.getDate() - 3);

    const year = threeDaysAgoDate.getFullYear();
    const month = threeDaysAgoDate.getMonth() + 1; 
    const day = threeDaysAgoDate.getDate();

    
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${year}-${formattedMonth}-${formattedDay}`;
}


console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17))); 
console.log(threeDaysAgo(new Date(1965, 3, 15))); 