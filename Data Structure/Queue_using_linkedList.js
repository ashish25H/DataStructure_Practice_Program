class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize(){
    console.log(`Size is ${this.size}`);
  }

  inQueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      let temp = this.head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
      this.size++;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log(`Node is not present`);
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


const queue = new Queue();
console.log(queue.isEmpty());
queue.inQueue(1);
queue.inQueue(2);
queue.inQueue(3);
queue.inQueue(4);
queue.print();

console.log();

queue.deQueue();
queue.print();
queue.getSize();
