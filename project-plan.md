**Given your inputs, what are the steps necessary to return the desired output?**

**IMP:** Do not use duplicate values. Be sure to always remove duplicate values or check for an existing value before inserting.

1. A node.js file that exports a Node class with a data, left and right attributes for the object constructor.

2. A Tree class with constructor that accepts an array. It should have a root attribute which uses the return value of buildTree.

3. buildTree(array) – It takes an array of data and turns it into a balanced binary tree full of Node objects. The function should return the level-0 root node. How do I build this function?

    i) Then use the recursion method to create a balanced binary tree with that and return the root node. The root node will have the data, left and right attributes. Each of the left and right attributes will act as a root for their own left and right sub-trees.

    ii) Use that code that allows you to print your binary tree.

4. Insert & Delete Logic:

    4.1. insert(value) – How would I insert new values? I would traverse the tree and compare the value to be inserted against all the other nodes. Check out those included resources to figure out how you would implement this function. Do not include duplicate values.

    4.2. deleteItem(value) – Similarly, I’d traverse the array, find the item and make it’s node equal to null. You’d have to check if the node has children or not. If it does, then you’d have to manipulate the nodes and connections. Again, utilize the resources, completely understand them and use that knowledge to implement your function.

        i) There’s only going to be one instance of a value.

        ii) Case 1 – Node doesn’t have children: I’ll traverse and keep track of the each node, if the value matches, then simply delete that node. Or you may have to make the left or right pointer of the parent equal to null.

        iii) Case 2 – Node does have child	ren: First find the node that you have to delete. If it has children, then make the left/right point of its parent point to the left/right child of the current node, thus deleting its record from the tree.

5. find(value) – For this you would just traverse through the tree, compare the value of each node with the argument value’s value and return the entire node that contains the matching value. Whether or not, you would include the children is something you’d have to decide later on.

6. levelOrder(callback) – I need to implement breadth first search (BFS), which can be done with enough research. I have to pass each of the nodes to a callback function which I think just prints out the values. Maybe ask someone on TOP for clarification.

7. DFS Functions:

    7.1. inOrder(callback) – Inorder DFS traversal is left, data, right

    7.2.  preOrder(callback) – Pre-order DFS traversal is data, left, right

    7.3. postOrder(callback) – Post-order DFS traversal is left, right, data.

    7.4. I think the callback function should just print out the tree values in order but again ask someone.

8. height(node) – Traverse through the tree and find the node first. Then, find the longest path from that node to a leaf node. A leaf node is a node that has no children. Have a counter variable that will count every edge and returns the total.

    i) Use BFS traversal. If you push something to signify the end of a level during BFS traversal. Then you can count those to find the height of the tree.

9. depth(node) – Starting from the root, count the no. of edges it takes to get to given node. Return the total.

10. isBalanced() - Traverse through the tree and for each node, calculate the heights of the left sub-tree and the right sub-tree, and find the difference. If it’s greater than one at any point, then the tree is not balanced.

11. rebalance() - I think in-order traversal gives you a sorted array, verify that and use it to get one. Then, pass that sorted array to the build tree function.

    i) First, the buildTree() will infact sort the array to create a balanced BST. Then after you add large elements to the tree, it becomes unbalanced. You’re adding elements to the tree obj, you can’t pass that into build tree. So you need to use a traversal to get the sorted array and call build tree with that array to get a balanced BST which you re-assign back to the tree object.

12. script.js – Driver Script – Just follow the instructions given on TOP and create the driver script.