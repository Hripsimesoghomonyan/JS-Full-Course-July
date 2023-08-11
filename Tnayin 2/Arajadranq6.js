"use strict"

function parseInteger(arr) {
  return arr.map(item => isNaN(+item) ? null : item);
}


console.log(parseInteger(["1", "2", "34"])); 
console.log(parseInteger(["1", "px", "2323f"])); 
