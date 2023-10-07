"use strict"

class Node {
    constructor(date) {
        this.date = date;
        this.next = null;
    }
}


class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    append(date) {
        const newNode = new Node(date);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }
    prepend(date) {
        const newNode = new Node(date);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insert(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(data);
        } else {
            const newNode = new Node(data);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
        return true;
    }
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.date;
    }
    remove(dete) {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            if (current.dete === dete) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
  
    getSize() {
        return this.size;
    }
  
    isEmpty() {
        return this.size === 0;
    }
  
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.dete);
            current = current.next;
        }
    }    
}

  
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insert(3, 3);
list.printList(); 
console.log("Size:", list.getSize()); 
list.remove(2);
list.removeAt(2);
list.printList(); 
console.log("Size:", list.getSize());
