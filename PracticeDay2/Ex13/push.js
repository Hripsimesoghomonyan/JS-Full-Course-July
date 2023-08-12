"use strict"

function customPush(array, ...values) {
  const newArray = [...array, ...values];
  return newArray.length;
}