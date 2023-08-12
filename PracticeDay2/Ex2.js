'use strict'
function acronymize(phrase) {
  const words = phrase.split(' ');
  const acronym = words.map(word => word[0].toUpperCase()).join('');
  return acronym;
}


console.log(acronymize('Prisoner of War'));
console.log(acronymize('Have a good night'));
