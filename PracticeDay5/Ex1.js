class Pagination {
    constructor(array, pageSize) {
      this.array = array;
      this.pageSize = pageSize;
      this.currentPage = 1;
    }
    nextPage() {
      if (this.currentPage < this.getTotalPages()) {
        this.currentPage++;
      }
      return this;
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      return this;
    }
  
    firstPage() {
      this.currentPage = 1;
      return this;
    }
  
    lastPage() {
      this.currentPage = this.getTotalPages();
      return this;
    }
  
    goToPage(page) {
      if (page >= 1 && page <= this.getTotalPages()) {
        this.currentPage = page;
      }
      return this;
    }
  
    getPageItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.array.slice(startIndex, endIndex);
    }
  
    getTotalPages() {
      return Math.ceil(this.array.length / this.pageSize);
    }
  
    static init(array, pageSize) {
      return new Pagination(array, pageSize);
    }
  }
  
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const PaginationObj = Pagination.init(alphabetArray, 4);
  
  console.log(PaginationObj.getPageItems()); 
  PaginationObj.nextPage();
  console.log(PaginationObj.getPageItems()); 
  PaginationObj.nextPage().nextPage();
  console.log(PaginationObj.getPageItems());
  PaginationObj.goToPage(3);
  console.log(PaginationObj.getPageItems());
  