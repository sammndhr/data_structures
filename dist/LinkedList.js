"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = function () {
  // const head = Symbol('head') //To keep head as private in linked list
  // const size = Symbol('size')
  var ListNode = function ListNode(val) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, ListNode);

    this.val = val;
    this.next = next;
  };

  var LinkedList = /*#__PURE__*/function () {
    // Private static fields
    function LinkedList() {
      _classCallCheck(this, LinkedList);

      _head.set(this, {
        writable: true,
        value: void 0
      });

      _size.set(this, {
        writable: true,
        value: void 0
      });

      // The head and size property shouldn't be modifiable outside the class. So there should only be a getter. Class fields aren't supported by a lot of browsers. Use symbol instead to create private class variables if you're not using babel.
      _classPrivateFieldSet(this, _head, null);

      _classPrivateFieldSet(this, _size, 0); // this[head] = null
      // this[size] = 0

    } //getters


    _createClass(LinkedList, [{
      key: "fromArray",
      value: function fromArray(array) {
        var _iterator = _createForOfIteratorHelper(array),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var val = _step.value;
            this.appendToTail(val);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var result = [];

        var curr = _classPrivateFieldGet(this, _head);

        while (curr) {
          result.push(curr.val);
          curr = curr.next;
        }

        return result;
      } // T — O(1)

    }, {
      key: "prependToHead",
      value: function prependToHead(val) {
        var _this$size;

        var node = new ListNode(val);
        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {
          var prevHead = _classPrivateFieldGet(this, _head);

          _classPrivateFieldSet(this, _head, node);

          _classPrivateFieldGet(this, _head).next = prevHead;
        }
        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
      } // T — O(n)

    }, {
      key: "appendToTail",
      value: function appendToTail(val) {
        var _this$size2;

        var node = new ListNode(val);
        if (_classPrivateFieldGet(this, _head) == null) _classPrivateFieldSet(this, _head, node);else {
          var curr = _classPrivateFieldGet(this, _head);

          while (curr.next) {
            curr = curr.next;
          }

          curr.next = node;
        }
        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) + 1), _this$size2;
      } // T — O(1)

    }, {
      key: "deleteFromHead",
      value: function deleteFromHead() {
        var _this$size3;

        var currHead = _classPrivateFieldGet(this, _head);

        if (!currHead) return null;

        _classPrivateFieldSet(this, _head, currHead.next);

        _classPrivateFieldSet(this, _size, (_this$size3 = +_classPrivateFieldGet(this, _size)) - 1), _this$size3;
        return currHead.val;
      } // T — O(n)

    }, {
      key: "deleteFromTail",
      value: function deleteFromTail() {
        var _this$size5;

        var curr = _classPrivateFieldGet(this, _head);

        if (!curr) return null; //Handle case of single node in linked list

        if (!curr.next) {
          var _this$size4;

          _classPrivateFieldSet(this, _head, null);

          _classPrivateFieldSet(this, _size, (_this$size4 = +_classPrivateFieldGet(this, _size)) - 1), _this$size4;
          return curr.val;
        }

        var prev = null;

        while (curr.next) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = null;
        _classPrivateFieldSet(this, _size, (_this$size5 = +_classPrivateFieldGet(this, _size)) - 1), _this$size5;
        return curr.val;
      } // T — O(n). Non recursive version of deleteNodeRecursive

    }, {
      key: "deleteNode",
      value: function deleteNode(val) {
        var deleteMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var deleteCount = 0;

        var curr = _classPrivateFieldGet(this, _head),
            prev = null;

        while (curr) {
          if (curr.val === val) {
            var _this$size6;

            if (!prev) {
              //Don't need to garbage collect. This is Javascript, not C++
              // const temp = curr
              curr = curr.next; // temp.next = null

              _classPrivateFieldSet(this, _head, curr);
            } else {
              prev.next = curr.next; // curr.next = null

              curr = prev.next;
            }

            _classPrivateFieldSet(this, _size, (_this$size6 = +_classPrivateFieldGet(this, _size)) - 1), _this$size6;
            deleteCount++;
            if (!deleteMultiple) return true;
          } else {
            prev = curr;
            curr = curr.next;
          }
        }

        return !!deleteCount;
      }
    }, {
      key: "search",
      value: function search(val) {
        var curr = _classPrivateFieldGet(this, _head);

        while (curr) {
          if (curr.val === val) return true;
          curr = curr.next;
        }

        return false;
      }
    }, {
      key: "printList",
      value: function printList() {
        var result = this.toArray();
        console.log(result);
        return result;
      }
    }, {
      key: "head",
      get: function get() {
        return _classPrivateFieldGet(this, _head);
      }
    }, {
      key: "size",
      get: function get() {
        return _classPrivateFieldGet(this, _size);
      }
    }, {
      key: "tail",
      get: function get() {
        var curr = _classPrivateFieldGet(this, _head);

        if (!curr) return null;

        while (curr.next) {
          curr = curr.next;
        }

        return curr;
      }
    }]);

    return LinkedList;
  }();

  var _head = new WeakMap();

  var _size = new WeakMap();

  return LinkedList;
}();

module.exports = LinkedList;