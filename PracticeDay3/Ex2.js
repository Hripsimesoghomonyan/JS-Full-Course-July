
function findMinOfRow(row) {
  return Math.min(...row);
}

function getArrayOfMinimums(matrix) {
  return matrix.map(row => findMinOfRow(row));
}

const matrix = [
  [3, 7, 1],
  [9, 4, 6],
  [2, 8, 5],
  [12, 82, 15]
];

const minimumsArray = getArrayOfMinimums(matrix);
console.log(minimumsArray); 