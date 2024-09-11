import { Node } from "./node.js";
import { sortedArrtoBST, removeDuplicates } from "./helperFuncs.js";
export class Tree {
  constructor() {
    this.root;
  }

  buildTree(array) {
    array.sort((a, b) => a - b);
    array = removeDuplicates(array);
    let start = 0,
      end = array.length - 1;
    this.root = sortedArrtoBST(array, start, end);
  }

  insert(value) {
    let curNode = this.root,
      prev = null;

    while (curNode !== null) {
      prev = curNode;
      if (value < curNode.data) {
        curNode = curNode.left;
      } else if (value > curNode.data) {
        curNode = curNode.right;
      } else if (value == curNode.data) {
        break;
      }
    }

    if (value < prev.data) {
      prev.left = new Node(value);
    } else if (value > prev.data) {
      prev.right = new Node(value);
    } else if (value == prev.data) {
      throw new Error("Cannot insert duplicate values, Value already Exists!");
    }
  }

  deleteItem(value) {
    let curNode = this.root,
      prev = null;

    // Get the parent node and node of element
    while (curNode !== null && curNode.data !== value) {
      prev = curNode;
      if (value < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    // Loop finished iterating because curNode reached null
    // which means value was not found
    if (curNode === null) {
      console.log("Value not found!");
      return;
    }

    // Case 1 - Node has one child in left or right sub-tree
    // Case 2 - Node has no child, i.e., its a leaf node
    // Works for both cases
    if (curNode.left === null || curNode.right === null) {
      let newCurNode = curNode.left === null ? curNode.right : curNode.left;

      if (prev.left === curNode) {
        prev.left = newCurNode;
      } else if (prev.right === curNode) {
        prev.right = newCurNode;
      }
    }
    // Case 2 - Node has two children - both left and right sub-trees exist
    else {
      let p = null,
        temp = curNode.right;
      while (temp.left !== null) {
        p = temp;
        temp = temp.left;
      }

      if (p !== null) {
        p.left = temp.right;
      } else {
        curNode.right = temp.right;
      }
      curNode.data = temp.data;
    }
  }

  find(value) {
    let curNode = this.root;

    // Get the node of element
    while (curNode !== null && curNode.data !== value) {
      if (value < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    if (curNode === null) {
      console.log("Value not found!");
    } else {
      return curNode;
    }
  }

  levelOrder(node, callback) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    let queue = [],
      curNode;

    if (node === null) return;

    queue.push(node);
    queue.push(null);

    while (queue.length > 0) {
      curNode = queue.shift();
      callback(curNode);
      if (curNode === null) {
        if (queue.length > 0) {
          queue.push(null);
        }
      } else {
        if (curNode.left !== null) {
          queue.push(curNode.left);
        }
        if (curNode.right !== null) {
          queue.push(curNode.right);
        }
      }
    }
  }

  inOrder(root, callback) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (root === null) {
      return;
    }

    this.inOrder(root.left, callback);
    callback(root);
    this.inOrder(root.right, callback);
  }

  preOrder(root, callback) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (root === null) {
      return;
    }

    callback(root);
    this.preOrder(root.left, callback);
    this.preOrder(root.right, callback);
  }

  postOrder(root, callback) {
    if (!callback) {
      throw new Error("Callback is required");
    }

    if (root === null) {
      return;
    }

    this.postOrder(root.left, callback);
    this.postOrder(root.right, callback);
    callback(root);
  }

  height(node) {
    let height = -1;
    this.levelOrder(node, (curNode) => {
      if (curNode === null) {
        height++;
      }
    });
    return height;
  }

  depth(node) {
    let root = this.root;
    let depth = 0;
    while (root != null && root.data !== node.data) {
      if (node.data < root.data) {
        root = root.left;
      } else {
        root = root.right;
      }
      depth++;
    }
    return depth;
  }

  isBalanced() {
    let root = this.root,
      heightArray = [],
      heightDiff = 0,
      leftNodeHeight = 0,
      rightNodeHeight = 0;
    this.levelOrder(root, (curNode) => {
      if (curNode !== null) {
        if (curNode.left !== null) {
          leftNodeHeight = this.height(curNode.left);
        }
        if (curNode.right !== null) {
          rightNodeHeight = this.height(curNode.right);
        }
        heightDiff = leftNodeHeight - rightNodeHeight;

        if (heightDiff > 1 || heightDiff < -1) {
          heightArray.push(heightDiff);
        }
        (heightDiff = 0), (leftNodeHeight = 0), (rightNodeHeight = 0);
      }
    });
    return heightArray.length === 0;
  }

  rebalance() {
    let root = this.root,
      sortedArr = [];

    this.inOrder(root, (curNode) => {
      sortedArr.push(curNode.data);
    });

    this.buildTree(sortedArr);
  }
}
