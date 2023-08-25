"use strict"


function countOccurrences(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0; 
}

  if (arr[index] === target) {
    return 1 + countOccurrences(arr, target, index + 1);
  } else {
    return countOccurrences(arr, target, index + 1);
  }
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2));