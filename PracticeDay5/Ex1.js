"use strict"

const Pagination = {
    array: [],
    pageSize: 0,
    currentPage: 1,
  
    init(array, pageSize) {
      this.array = array;
      this.pageSize = pageSize;
      this.currentPage = 1;
      return this;
    },
  
    nextPage() {
      if (this.currentPage < this.getTotalPages()) {
        this.currentPage++;
      }
      return this;
    },
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      return this;
    },
  
    firstPage() {
      this.currentPage = 1;
      return this;
    },
  
    lastPage() {
      this.currentPage = this.getTotalPages();
      return this;
    },
  
    goToPage(page) {
      if (page >= 1 && page <= this.getTotalPages()) {
        this.currentPage = page;
      }
      return this;
    },
  
    getPageItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.array.slice(startIndex, endIndex);
    },
  
    getTotalPages() {
      return Math.ceil(this.array.length / this.pageSize);
    },
  };
  
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  Pagination.init(alphabetArray, 4);
  
  console.log(Pagination.getPageItems()); 
  Pagination.nextPage();
  console.log(Pagination.getPageItems()); 
  Pagination.nextPage().nextPage(); 
  console.log(Pagination.getPageItems());
  Pagination.goToPage(3);
  console.log(Pagination.getPageItems());
  