"use strict"

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAfter(targetData, data) {
        const newNode = new Node(data);
        let current = this.head;
        while (current) {
            if (current.data === targetData) {
                newNode.next = current.next;
                if (current.next) {
                    current.next.prev = newNode;
                }
                current.next = newNode;
                newNode.prev = current;
                break;
            }
            current = current.next;
        }
    }

    remove(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current === this.head) {
                    this.head = current.next;
                }
                return true;
            }
            current = current.next;
        }
        return false;
    }

    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.data} <-> `);
            current = current.next;
        }
        console.log("null");
    }
}

const duble = new DoubleLinkedList();
duble.append(1);
duble.append(2);
duble.append(3);
duble.prepend(0);
duble.printList();
duble.insertAfter(2, 2.5);
duble.printList();
duble.remove(1);
duble.printList();
duble.append(4)
duble.printList();