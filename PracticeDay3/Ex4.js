"use strict"

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    const transposedMatrix = [];
    for (let j = 0; j < numCols; j++) {
      const newRow = [];
      for (let i = 0; i < numRows; i++) {
        newRow.push(matrix[i][j]);
      }
      transposedMatrix.push(newRow);
    }
  
    return transposedMatrix;
  }
  
  function printMatrix(matrix) {
    for (const row of matrix) {
      console.log(row.join(" "));
    }
  }
  
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  const transposed = transposeMatrix(matrix);
  
  
  
  printMatrix(transposed);
  