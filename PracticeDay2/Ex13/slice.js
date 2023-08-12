"use strict"

function customSlice(array, start, end) {
  const newArray = [];
  const startIndex = start !== undefined ? (start < 0 ? Math.max(array.length + start, 0) : start) : 0;
  const endIndex = end !== undefined ? (end < 0 ? Math.max(array.length + end, 0) : Math.min(end, array.length)) : array.length;
  for (let i = startIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}