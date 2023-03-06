class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

  addFirst(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
    }
  }

  addLast(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.addFirst(value);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.size++;
    }
  }

  print(){
    let temp = this.head;

    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
  }

  deleteFirst(){
    if(this.isEmpty()){
      console.log(`Node is not present`);
    }else{
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }
  }

  deleteLast(){
    if(this.isEmpty()){
      console.log(`Node is not present`);
    }else{
      this.tail= this.tail.prev;
      this.tail.next = null;
      this.size--;
    }
  }


}

const Doubly = new DoublyLinkedList();
Doubly.addFirst(1);
Doubly.addFirst(2);
Doubly.addFirst(3);
Doubly.addFirst(4);

Doubly.print();

// console.log(Doubly.getSize());

Doubly.deleteFirst();
console.log();
Doubly.print();
Doubly.deleteLast();
console.log();
Doubly.print();


console.log(Doubly.getSize());