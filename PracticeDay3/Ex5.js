function adjustMatrix(matrix, k) {
  const n = matrix.length;
  const result = [];

  for (let i = 0; i < n; i++) {
      const rowSum = matrix[i].reduce((acc, val) => acc + val, 0);
      let remainingSum = rowSum - k;
      const newRow = [];

      if (remainingSum >= 0) {
          newRow.push(...matrix[i]);
      } else {
          let maxElement = Math.max(...matrix[i]);
          remainingSum += maxElement;

          for (let j = 0; j < n; j++) {
              if (matrix[i][j] !== maxElement) {
                  newRow.push(matrix[i][j]);
              } else if (remainingSum >= 0) {
                  newRow.push(matrix[i][j]);
                  remainingSum -= maxElement;
              } else {
                  break;
              }
          }
      }

      result.push(newRow);
  }

  return result;
}

// Մատրիցայի ներքևի օրինակ
const matrix = [
  [3, 2, 5],
  [7, 1, 4],
  [9, 6, 8]
];

const k = 10;

const adjustedMatrix = adjustMatrix(matrix, k);
for (const row of adjustedMatrix) {
  console.log(row);
}
