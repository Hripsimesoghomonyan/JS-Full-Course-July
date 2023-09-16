"use strict"

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new Error("s.split is not a function");
    } else {
      s = s.split("").reverse().join("");
      console.log(s);
    }
  } catch (error) {
    console.log(error.message);
  }
}

reverseString("Hello");
reverseString(123);