"use strict"

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1; 
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1); 
    } else {
      return binarySearch(arr, target, mid + 1, end); 
    }
  }
  
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  
  console.log(binarySearch(sortedArray, 9));
  console.log(binarySearch(sortedArray, 10)); 
  