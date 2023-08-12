"use strict"

function sortBy(arr, str = "Asc") {
  if (str === "Asc") {
    return arr.slice().sort((a, b) => a - b);
  } else if (str === "Desc") {
    return arr.slice().sort((a, b) => b - a);
  } else {
    throw new Error("Invalid sort order. Use 'Asc' or 'Desc'.");
  }
}
console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
