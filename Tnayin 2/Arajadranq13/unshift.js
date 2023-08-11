"use strict"

Array.prototype.unshiftCustom = function (...elements) {
  for (let i = elements.length - 1; i >= 0; i--) {
    this.splice(0, 0, elements[i]);
  }
  return this.length;
};
