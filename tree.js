import { Node } from "./node.js";

export class Tree {
  constructor(root) {
    this.root = root;
  }

  buildTree(array) {
    let start = 0,
      end = array.length - 1;
    return sortedArrtoBST(array, start, end);
  }
}

function sortedArrtoBST(array, start, end) {
  if (start > end) {
    return;
  }

  let mid = Math.floor((start + end) / 2);
  let node = new Node(array[mid]);

  node.left = sortedArrtoBST(array, start, mid - 1);
  node.right = sortedArrtoBST(array, mid + 1, end);

  return node;
}
