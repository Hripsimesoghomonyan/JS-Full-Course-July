"use strict"

const getWeekOfMonth = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstWeekday = startOfMonth.getDay();
    const offsetDate = date.getDate() + firstWeekday - 1;
    return Math.floor(offsetDate / 7) + 1;
};

const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result);  
