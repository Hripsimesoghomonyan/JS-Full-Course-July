"use strict"

function generateCombinations(arr, k, start = 0, currentCombo = [], result = []) {
  if (k === 0) {
    result.push([...currentCombo]);
    return;
  }

  for (let i = start; i <= arr.length - k; i++) {
    currentCombo.push(arr[i]);
    generateCombinations(arr, k - 1, i + 1, currentCombo, result);
    currentCombo.pop();
  }

  return result;
}

const inputArray = [1, 2, 3, 4];
const k = 2;
const combinations = generateCombinations(inputArray, k);
console.log(combinations);
