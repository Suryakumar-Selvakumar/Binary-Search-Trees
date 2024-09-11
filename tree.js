import { Node } from "./node.js";

export class Tree {
  constructor() {
    this.root;
  }

  buildTree(array) {
    let start = 0,
      end = array.length - 1;
    array.sort((a, b) => a - b);
    this.root = sortedArrtoBST(array, start, end);
  }

  insert(value) {
    let curNode = this.root;

    while (curNode.left !== null || curNode.right !== null) {
      if (value < curNode.data) {
        curNode = curNode.left;
      } else if (value >= curNode.data) {
        curNode = curNode.right;
      }
    }

    if (value < curNode.data) {
      curNode.left = new Node(value);
    } else if (value >= curNode.data) {
      curNode.right = new Node(value);
    }
  }
}

function sortedArrtoBST(array, start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let node = new Node(array[mid]);

  node.left = sortedArrtoBST(array, start, mid - 1);
  node.right = sortedArrtoBST(array, mid + 1, end);

  return node;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const tree = new Tree();
// tree.buildTree(arr);
// console.log(tree.root);
// console.log(prettyPrint(tree.root));
// tree.insert(20);
// console.log(prettyPrint(tree.root));
