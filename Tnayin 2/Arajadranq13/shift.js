"use strict"
function customShift(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const shiftedValue = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return shiftedValue;
}
