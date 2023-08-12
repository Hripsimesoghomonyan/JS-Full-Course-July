"use strict"
  
function customFlat(array, depth = 1) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      const nestedArray = customFlat(array[i], depth - 1);
      for (let j = 0; j < nestedArray.length; j++) {
        flattenedArray.push(nestedArray[j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}