class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      node.next = null;
      this.head = node;
      this.size++;
    } else {
      const temp = this.head;
      node.next = temp;
      this.head = node;
      this.size++;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log(`Node not present`);
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  print() {
    let temp = this.head;

    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();
stack.pop();
console.log();
stack.print();
console.log(stack.getSize());
