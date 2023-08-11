"use strict"

Array.prototype.shiftCustom = function () {
  if (this.length === 0) return undefined;
  const shiftedElement = this[0];
  this.splice(0, 1);
  return shiftedElement;
};
