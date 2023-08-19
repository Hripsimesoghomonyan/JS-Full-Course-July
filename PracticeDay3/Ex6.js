function findLargestSubmatrix(matrix, k) {
  const n = matrix.length;
  let maxSubmatrixSize = 0;

  // Գտնել ամենամեծ ներդրված kxk մատրիցայի երկարթյունը
  for (let i = 0; i <= n - k; i++) {
      for (let j = 0; j <= n - k; j++) {
          let sum = 0;

          // Հաշվել kxk մատրիցայի գումարը
          for (let row = i; row < i + k; row++) {
              for (let col = j; col < j + k; col++) {
                  sum += matrix[row][col];
              }
          }

          // Թարմացնել ամենամեծ երկարթյունը
          maxSubmatrixSize = Math.max(maxSubmatrixSize, sum);
      }
  }

  return maxSubmatrixSize;
}

// Մատրիցայի ներքևի օրինակ
const matrix = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0]
];

const k = 2;

const largestSubmatrixSize = findLargestSubmatrix(matrix, k);
console.log(largestSubmatrixSize});
