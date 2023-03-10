class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertVal(node, temp) {
    if (node.value > temp.value) {
      if (temp.right === null) {
        temp.right = node;
      } else {
        this.insertVal(node, temp.right);
      }
    } else if (node.value < temp.value) {
      if (temp.left === null) {
        temp.left = node;
      } else {
        this.insertVal(node, temp.left);
      }
    }
  }

  insertNode(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertVal(node, this.root);
    }
  }
}

const tree = new BinarySearchTree();

console.log(tree.isEmpty());
tree.insertNode(10);
tree.insertNode(12);
tree.insertNode(8);
console.log(tree.isEmpty());
