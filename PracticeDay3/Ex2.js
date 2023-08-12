function findMinimumsOfRows(matrix) {
    const result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      if (row.length === 0) {
        result.push(undefined);
      } else {
        const min = Math.min(...row);
        result.push(min);
      }
    }
  
    return result;
  }
  
  
  const matrix = [
    [3, 7, 1],
    [9, 4, 6],
    [2, 8, 5]
  ];
  
  const minimums = findMinimumsOfRows(matrix);
  console.log(minimums); 
  