"use strict"

function permutations(str) {
  if (str.length === 1) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(remaining);

    for (const subPerm of subPermutations) {
      result.push(char + subPerm);
    }
  }

  return result;
}

const result = permutations("hello");
console.log(result);
