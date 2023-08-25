"use strict"

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, ''); 
  
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    
    return isPalindrome(str.slice(1, -1));
  }
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
