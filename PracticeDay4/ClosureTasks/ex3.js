"use strict";

function createCachingFunction() {
  const cache = {};

  return function(input) {
    if (cache[input] !== undefined) {
      return cache[input];
    } else {
      const result = input * 2; 
      cache[input] = result;
      return result;
    }
  };
}

const cachedCalculation = createCachingFunction();

console.log(cachedCalculation(5));
console.log(cachedCalculation(5));