"use strict"

Array.prototype.spliceCustom = function (start, deleteCount, ...items) {
    const removedElements = this.slice(start, start + deleteCount);
    const afterDeleteCount = this.slice(start + deleteCount);
    this.length = start;
    this.push(...items, ...afterDeleteCount);
    return removedElements;
  };
  