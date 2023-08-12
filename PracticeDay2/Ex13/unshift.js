"use strict"

function customShift(array) {
  if (array.length === 0) {
    return undefined;
  }
  const shiftedValue = array[0];
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return shiftedValue;
}