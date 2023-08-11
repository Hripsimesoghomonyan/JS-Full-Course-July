"use strict"

Array.prototype.pushCustom = function (...elements) {
  for (const element of elements) {
    this[this.length] = element;
  }
  return this.length;
};
