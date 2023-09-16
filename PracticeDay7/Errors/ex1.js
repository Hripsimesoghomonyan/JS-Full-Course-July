"use strict"

function reverseString(s) {
    try {
      const reversedString = s.split('').reverse().join('');
      console.log(reversedString);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log(s);
    }
  }
  
const inputString = "Hello, World!";
  
reverseString(inputString);
  