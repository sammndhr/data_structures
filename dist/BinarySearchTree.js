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
  var TreeNode = function TreeNode(key) {
    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, TreeNode);

    this.key = key;
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

      /* Creates a TreeNode and inserts it while preserving BST properties into the tree.  */
      value: function insert(key) {
        var newNode = new TreeNode(key);

        if (this.root === null) {
          _classPrivateFieldSet(this, _root, newNode);

          return newNode;
        }

        var prev = null,
            curr = this.root;

        while (curr !== null) {
          if (key === curr.key) return 'Key Already Exists!';else if (key < curr.key) {
            prev = curr;
            curr = curr.left;
          } else {
            prev = curr;
            curr = curr.right;
          }
        }

        if (key < prev.key) prev.left = newNode;
        if (key > prev.key) prev.right = newNode;
        return _classPrivateFieldGet(this, _root);
      }
      /* Searches the tree for the given key.  */

    }, {
      key: "search",
      value: function search(key) {
        var curr = this.root;

        while (curr !== null) {
          if (key === curr.key) return curr;else if (key < curr.key) curr = curr.left;else curr = curr.right;
        }

        return null;
      }
      /* Finds the minimum key in the tree. */

    }, {
      key: "findMin",
      value: function findMin() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
        if (node === null) return null;
        var curr = node;

        while (curr.left !== null) {
          curr = curr.left;
        }

        return curr.key;
      }
      /* Finds the maximum key in the tree. */

    }, {
      key: "findMax",
      value: function findMax() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
        if (node === null) return null;
        var curr = node;

        while (curr.right !== null) {
          curr = curr.right;
        }

        return curr.key;
      }
      /* Finds the successor of the given key.  */

    }, {
      key: "successor",
      value: function successor(key) {
        var predecessor = this.search(key);
        if (this.root === null || !predecessor) return null;

        if (predecessor.right !== null) {
          var _curr = predecessor.right;

          while (_curr.left !== null) {
            _curr = _curr.left;
          }

          return _curr;
        }

        var ancestor = null,
            curr = this.root;

        while (curr.key !== predecessor.key) {
          if (predecessor.key < curr.key) {
            ancestor = curr;
            curr = curr.left;
          } else curr = curr.right;

          if (ancestor) console.log(ancestor.key);
        }

        return ancestor;
      }
      /* Finds the predecessor of the given key.  */

    }, {
      key: "predecessor",
      value: function predecessor(key) {
        var successor = this.search(key);
        if (this.root === null || !successor) return null;

        if (successor.left !== null) {
          var _curr2 = successor.left;

          while (_curr2.right !== null) {
            _curr2 = _curr2.right;
          }

          return _curr2;
        }

        var ancestor = null,
            curr = this.root;

        while (curr.key !== successor.key) {
          if (successor.key > curr.key) {
            ancestor = curr;
            curr = curr.right;
          } else curr = curr.left;

          if (ancestor) console.log(ancestor.key);
        }

        return ancestor;
      }
      /* Deletes the node with given key from tree. */

    }, {
      key: "delete",
      value: function _delete(key) {
        function deleteNode(key, root) {
          var curr = root,
              prev = null;

          while (curr !== null) {
            if (key === curr.key) break;else if (key < curr.key) {
              prev = curr;
              curr = curr.left;
            } else {
              prev = curr;
              curr = curr.right;
            }
          } // key doesn't exist


          if (curr === null) return root; // Deletion case 1: Node has NO children (leaf node)

          if (curr.left === null && curr.right === null) {
            if (prev === null) return null;
            if (curr.key === prev.left.key) prev.left = null;else prev.right = null;
          } // Deletion case 2: Node has one child


          var child = null;
          if (curr.left === null && curr.right !== null) child = curr.right;
          if (curr.right === null && curr.left !== null) child = curr.left;

          if (child !== null) {
            if (prev === null) return child;
            if (curr.key === prev.left.key) prev.left = child;else prev.right = child;
          } // Deletion case 3: Node has two children.


          if (curr.left !== null && curr.right !== null) {
            var succ = curr.right;
            prev = curr;

            while (succ.left !== null) {
              prev = succ;
              succ = succ.left;
            }

            curr.key = succ.key;
            if (succ === prev.left) prev.left = succ.right;else prev.right = succ.right;
          }

          return root;
        }

        _classPrivateFieldSet(this, _root, deleteNode(key, this.root));
      } // tree traversals
      // returns array of keys

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