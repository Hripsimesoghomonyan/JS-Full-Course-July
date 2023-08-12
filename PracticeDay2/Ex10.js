"use strict "

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function sumNumbersOver18(arr) {
  return arr.reduce((sum, num) => (num >= 18 ? sum + num : sum), 0);
}

const result = sumNumbersOver18(arr);
console.log(result); 
