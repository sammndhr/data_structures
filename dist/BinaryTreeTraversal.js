"use strict";

var Stack = require('./Stack');

var Queue = require('./Queue');

var BFS = function BFS(root) {
  var res = [],
      queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    var node = queue.dequeue();
    res.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }

  return res;
};

var DFSRecursive = {
  inOrder: function inOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        recurse(node.left);
        res.push(node.val);
        recurse(node.right);
      }
    }

    recurse(root);
    return res;
  },
  preOrder: function preOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        res.push(node.val);
        recurse(node.left);
        recurse(node.right);
      }
    }

    recurse(root);
    return res;
  },
  postOrder: function postOrder(root) {
    var res = [];

    function recurse(node) {
      if (node !== null) {
        recurse(node.left);
        recurse(node.right);
        res.push(node.val);
      }
    }

    recurse(root);
    return res;
  }
};
var DFSIterative = {
  inOrder: function inOrder(root) {
    var res = [],
        stack = new Stack();
    var curr = root;

    while (!stack.isEmpty() || curr !== null) {
      if (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      } else {
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
      }
    }

    return res;
  },
  preOrder: function preOrder(root) {
    var res = [],
        stack = new Stack();
    var curr;
    stack.push(root);

    while (!stack.isEmpty()) {
      curr = stack.pop();
      res.push(curr.val);
      if (curr.right !== null) stack.push(curr.right);
      if (curr.left !== null) stack.push(curr.left);
    }

    return res;
  },
  // Iterative post order using two stacks
  postOrder: function postOrder(root) {
    var res = [],
        stack1 = new Stack(),
        stack2 = new Stack();
    var curr;
    stack1.push(root);

    while (!stack1.isEmpty()) {
      curr = stack1.pop();
      stack2.push(curr);
      if (curr.left != null) stack1.push(curr.left);
      if (curr.right != null) stack1.push(curr.right);
    }

    while (!stack2.isEmpty()) {
      curr = stack2.pop();
      res.push(curr.val);
    }

    return res;
  }
};
module.exports = {
  BFS: BFS,
  DFSIterative: DFSIterative,
  DFSRecursive: DFSRecursive
};