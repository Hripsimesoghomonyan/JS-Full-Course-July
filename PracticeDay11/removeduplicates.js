"use strict"

function removeDuplicatesFromArray(arr) {
    const uniqueArray = [];
    for (const item of arr) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  }
  
  
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicatesFromArray(arrayWithDuplicates);
  
  console.log(uniqueArray); 
  