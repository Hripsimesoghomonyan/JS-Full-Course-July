"use strict"

function filterNumbers(arr) {
  return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN,9594];
const numbersArray = filterNumbers(arr);
console.log(numbersArray);