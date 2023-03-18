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

  search(root, value) {
    if (this.isEmpty()) {
      console.log(`Tree is Empty`);
    }

    if (!root) {
      console.log(`Value is not Present`);
    } else if (root.value === value) {
      console.log(`value is Present`);
    } else if (value < root.value) {
      this.search(root.left, value);
    } else if (value > root.value) {
      this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
}

const tree = new BinarySearchTree();

console.log(tree.isEmpty());
tree.insertNode(10);
tree.insertNode(12);
tree.insertNode(8);
console.log(tree.isEmpty());
tree.search(tree.root, 20);
tree.preOrder(tree.root);
tree.postOrder(tree.root);
tree.inOrder(tree.root);

