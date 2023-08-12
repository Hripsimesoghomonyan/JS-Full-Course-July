"use strict"
function customPop(array) {
  if (array.length === 0) {
    return undefined;
  }
  const poppedValue = array[array.length - 1];
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return poppedValue;
}