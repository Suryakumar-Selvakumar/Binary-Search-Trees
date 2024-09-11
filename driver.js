import { Tree } from "./tree.js";
import { prettyPrint, randomNumsArray } from "./helperFuncs.js";

// Getting a random array from a random array generator
const arr = randomNumsArray(20);

// Creating a tree obj, Using buildTree to build a balanced BST, Checking if it is balanced
const tree = new Tree();
tree.buildTree(arr);
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

// Printing out elements in level, pre, post and in Order
let displayArr = [];
const displayElements = (elem) => {
  if (elem !== null) displayArr = displayArr.concat(elem.data);
};

// levelOrder Traversal
tree.levelOrder(tree.root, displayElements);
console.log("Level-Order Traversal =>", displayArr);
displayArr = [];

// preOrder Traversal
tree.preOrder(tree.root, displayElements);
console.log("Pre-Order Traversal =>", displayArr);
displayArr = [];

// postOrder Traversal
tree.postOrder(tree.root, displayElements);
console.log("Post-Order Traversal", displayArr);
displayArr = [];

// inOrder Traversal
tree.inOrder(tree.root, displayElements);
console.log("In-Order Traversal", displayArr);
displayArr = [];

// Unbalancing the tree by adding several numbers > 100 and Checking if it is unbalanced
tree.insert(150);
tree.insert(687);
tree.insert(435);
tree.insert(212);
tree.insert(999);
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

// Balancing the tree using rebalance()
tree.rebalance();
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

// levelOrder Traversal
tree.levelOrder(tree.root, displayElements);
console.log("Level-Order Traversal =>", displayArr);
displayArr = [];

// preOrder Traversal
tree.preOrder(tree.root, displayElements);
console.log("Pre-Order Traversal =>", displayArr);
displayArr = [];

// postOrder Traversal
tree.postOrder(tree.root, displayElements);
console.log("Post-Order Traversal", displayArr);
displayArr = [];

// inOrder Traversal
tree.inOrder(tree.root, displayElements);
console.log("In-Order Traversal", displayArr);
displayArr = [];
