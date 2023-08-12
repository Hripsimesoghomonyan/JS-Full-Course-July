"use strict"
function customSplice(array, start, deleteCount, ...items) {
  const newArray = [];
  const startIndex = start < 0 ? Math.max(array.length + start, 0) : Math.min(start, array.length);
  const actualDeleteCount = Math.min(deleteCount, array.length - startIndex);
  for (let i = 0; i < startIndex; i++) {
    newArray.push(array[i]);
  }
  for (let i = 0; i < items.length; i++) {
    newArray.push(items[i]);
  }
  for (let i = startIndex + actualDeleteCount; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
