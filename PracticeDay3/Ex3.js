"use strict"

function findWordInMatrix(matrix, word) {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      const joinedRow = row.join('');
      if (joinedRow.includes(word)) {
        return true;
      }
    }
    return false;
  }
  
  
  const matrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
  ];
  const word = 'beh';
  
  const hasWord = findWordInMatrix(matrix, word);
  if (hasWord) {
    console.log(`Մատրիցան պարունակում է բառը "${word}"`);
  } else {
    console.log(`Մատրիցան չի պարունակում բառը "${word}"`);
  }
  