"use strict"


function sumRow(row) {
    return row.reduce((acc, val) => acc + val, 0);
  }
  
  function findIndexOfLargestSum(matrix) {
    if (!matrix || matrix.length === 0) {
      return -1;
    }
  
    let largestSum = 0;
    let indexOfLargestSum = -1;
  
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      if (row && row.length > 0) {
        const sum = sumRow(row);
        if (sum > largestSum) {
          largestSum = sum;
          indexOfLargestSum = i;
        }
      }
    }
  
    return indexOfLargestSum;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];
  
  const indexOfLargestSum = findIndexOfLargestSum(matrix);
  console.log( indexOfLargestSum);
  