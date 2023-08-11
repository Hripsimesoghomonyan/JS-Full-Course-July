"use strict"

Array.prototype.popCustom = function () {
  if (this.length === 0) return undefined;
  const poppedElement = this[this.length - 1];
  this.splice(this.length - 1, 1);
  return poppedElement;
};
