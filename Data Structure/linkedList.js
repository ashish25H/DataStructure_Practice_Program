class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    let node = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  prePend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      node.next = null;
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  appendLast(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.prePend(value);
    } else {
      let temp = this.head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
      this.size++;
    }
  }

  addAfterNode(value, searchNode) {
    let temp = this.head;
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      while (temp.value !== searchNode) {
        temp = temp.next;
      }

      const node = new Node(value);
      node.next = temp.next;
      temp.next = node;
      this.size++;
    }
  }

  removeFirst() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      let temp = this.head;
      temp = temp.next;
      this.head = temp;
    }
  }

  removeLast() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else if (this.head.next === null) {
      this.removeFirst();
    } else {
      let temp = this.head;
      let prev = null;
      while (temp.next !== null) {
        prev = temp;
        temp = temp.next;
      }

      prev.next = null;
    }
  }

  removeInBetween(searchVal) {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      let temp = this.head;
      let prev = null;
      while (temp.value !== searchVal) {
        prev = temp;
        temp = temp.next;
      }

      if (prev === null) {
        this.removeFirst();
      } else if (prev !== null && temp.next === null) {
        this.removeLast();
      } else {
        prev.next = temp.next;
      }
    }
  }

  reverseLinkedList(){
    let prev = null;
    let current = this.head;

    while(current){
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty());
linkedList.appendLast(10);
linkedList.appendLast(20);
linkedList.appendLast(30);
linkedList.appendLast(40);
linkedList.appendLast(50);

linkedList.print();
console.log(`\n`);
linkedList.reverseLinkedList();
linkedList.print();
