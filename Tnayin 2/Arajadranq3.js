'use strict'

function computeScrabbleScore(word) {
  const scoreTable = [
    'aeioulnrst', 
    'dg',         
    'bcmp',       
    'fhvwy',    
    'k',         
    'jx',        
    'qz',      
  ];

  const wordScore = word
    .toLowerCase()
    .split('')
    .map((char) => scoreTable.findIndex((letters) => letters.includes(char)) + 1)
    .reduce((total, score) => total + score, 0);

  return wordScore;
}
console.log(computeScrabbleScore("hripsime soghomonyan")); 
console.log(computeScrabbleScore("hovhannes"));

