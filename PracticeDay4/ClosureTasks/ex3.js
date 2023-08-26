"use strict";

function createCachingFunction() {
  const cache = {};

  return function(input) {
    if (input in cache) {
      return `${cache[input]} (cached)`;
    } 
      const result = input * 2; 
      cache[input] = result;
      return result;
    
  };
}

const cachedCalculation = createCachingFunction();

console.log(cachedCalculation(5));
console.log(cachedCalculation(5));