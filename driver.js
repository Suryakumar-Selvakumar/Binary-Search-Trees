import { Tree } from "./tree.js";
import {
  prettyPrint,
  randomNumsArray,
  displayElements,
} from "./helperFuncs.js";

// Getting a random array from a random array generator
const arr = randomNumsArray(20);

// Creating a tree obj, \
// using buildTree to build a balanced BST,
// checking if it is balanced
const tree = new Tree();
tree.buildTree(arr);
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

// console.log(tree.root);
// tree.insert(20);
// tree.deleteItem(67);
// console.log(tree.find(10));
// console.log(tree.depth(tree.root));

// console.log(tree.height(tree.root.left.right));
// tree.rebalance();
// console.log(prettyPrint(tree.root));
