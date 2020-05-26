"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('./BinaryTreeTraversal'),
    BFS = _require.BFS,
    DFSIterative = _require.DFSIterative;

var BinarySearchTree = function () {
  var findMinNode = function findMinNode(node) {
    if (node.left === null) return node;else return findMinNode(node.left);
  };

  var TreeNode = function TreeNode(val) {
    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, TreeNode);

    this.val = val;
    this.left = left;
    this.right = right;
  };

  var BinarySearchTree = /*#__PURE__*/function () {
    function BinarySearchTree() {
      _classCallCheck(this, BinarySearchTree);

      _root.set(this, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldSet(this, _root, null);
    }

    _createClass(BinarySearchTree, [{
      key: "insert",
      value: function insert(val) {
        var recursiveInsertNode = function recursiveInsertNode(node, newNode) {
          if (newNode.val < node.val) {
            if (node.left === null) node.left = newNode;else recursiveInsertNode(node.left, newNode);
          } else {
            if (node.right === null) node.right = newNode;else recursiveInsertNode(node.right, newNode);
          }
        };

        var newNode = new TreeNode(val);
        if (_classPrivateFieldGet(this, _root) === null) _classPrivateFieldSet(this, _root, newNode);else recursiveInsertNode(_classPrivateFieldGet(this, _root), newNode);
      }
    }, {
      key: "remove",
      value: function remove(val) {
        var removeNode = function removeNode(node, val) {
          if (node === null) return null;

          if (val < node.val) {
            node.left = removeNode(node.left, val);
            return node;
          }

          if (val > node.val) {
            node.right = removeNode(node.right, val);
            return node;
          } // If val matches node.val


          if (val === node.val) {
            // if node to delete doesn't have any children
            if (node.left === null && node.right === null) {
              node = null;
              return node;
            } // if node to delete has one right child


            if (node.left === null) {
              node = node.right;
              return node;
            } // if node to delete has one left child


            if (node.right === null) {
              node = node.left;
              return node;
            } // Deleting node with two children
            // find min node in right subtree. This will be a terminal node
            // traverse down right subtree and change the node.val to the min node val
            // Then call removeNode on the right subtree with the min.node val to delete the terminal node


            var sub = findMinNode(node.right);
            node.val = sub.val;
            node.right = removeNode(node.right, sub.val);
            return node;
          }
        };

        _classPrivateFieldSet(this, _root, removeNode(_classPrivateFieldGet(this, _root), val));
      } // searches tree for specified val and returns the node if found, null otherwise

    }, {
      key: "search",
      value: function search(val) {
        var recursiveSearch = function recursiveSearch(node, val) {
          if (node === null) return null;
          if (val < node.val) return recursiveSearch(node.left, val);
          if (val > node.val) return recursiveSearch(node.right, val);
          if (val === node.val) return node;
        };

        return recursiveSearch(_classPrivateFieldGet(this, _root), val);
      } // tree traversals
      // returns array of vals

    }, {
      key: "printInOrder",
      value: function printInOrder() {
        var res = DFSIterative.inOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printPreOrder",
      value: function printPreOrder() {
        var res = DFSIterative.preOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printPostOrder",
      value: function printPostOrder() {
        var res = DFSIterative.postOrder(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "printLevelOrder",
      value: function printLevelOrder() {
        var res = BFS(_classPrivateFieldGet(this, _root));
        console.log(res);
        return res;
      }
    }, {
      key: "root",
      get: function get() {
        return _classPrivateFieldGet(this, _root);
      }
    }]);

    return BinarySearchTree;
  }();

  var _root = new WeakMap();

  return BinarySearchTree;
}();

module.exports = BinarySearchTree;