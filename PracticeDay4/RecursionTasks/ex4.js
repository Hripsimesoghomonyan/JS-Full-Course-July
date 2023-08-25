"use strict"

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arraySum(arr.slice(1));
  }
}

console.log(arraySum([1, 2, 3, 4, 5])); 