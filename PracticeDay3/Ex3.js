function findWordInMatrix(matrix, word) {
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (searchWord(matrix, word, i, j, 0)) {
              return true;
          }
      }
  }

  return false;
}

function searchWord(matrix, word, row, col, index) {
  if (
      row < 0 ||
      col < 0 ||
      row >= matrix.length ||
      col >= matrix[0].length
  ) {
      return false;
  }

  if (matrix[row][col] === word[index]) {
      if (index === word.length - 1) {
          return true; 
      }


      
      const temp = matrix[row][col];
      matrix[row][col] = ''; 
      const found =
          searchWord(matrix, word, row + 1, col, index + 1) ||
          searchWord(matrix, word, row - 1, col, index + 1) ||
          searchWord(matrix, word, row, col + 1, index + 1) ||
          searchWord(matrix, word, row, col - 1, index + 1);

      matrix[row][col] = temp;
      return found;
  }

  return false;
}

const matrix = [
  ['g', 'e', 'e', 'k', 's'],
  ['f', 'o', 'r', 'g', 'e'],
  ['u', 'q', 'i', 'z', 'x']
];

const word = 'geeks';

const hasWord = findWordInMatrix(matrix, word);
if (hasWord) {
  console.log(`Հայտնաբերվել է "${word}" բառը`);
} else {
  console.log(`Չհայտնաբերվել "${word}" բառը`);
}
