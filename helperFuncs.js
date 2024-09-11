import { Node } from "./node.js";

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

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

function randomNumsArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}

export {
  prettyPrint,
  sortedArrtoBST,
  removeDuplicates,
  randomNumsArray,
};
