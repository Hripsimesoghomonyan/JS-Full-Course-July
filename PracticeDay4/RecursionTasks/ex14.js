"use strict"

function subsetSumHelper(arr, targetSum, currentIndex, currentSum) {
  if (currentSum === targetSum) {
    return true;
  }

  if (currentIndex >= arr.length) {
    return false;
  }

  const includeResult = subsetSumHelper(arr, targetSum, currentIndex + 1, currentSum + arr[currentIndex]);
  
  const excludeResult = subsetSumHelper(arr, targetSum, currentIndex + 1, currentSum);

  return includeResult || excludeResult;
}

function subsetSum(arr, targetSum) {
  return subsetSumHelper(arr, targetSum, 0, 0);
}

const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10));