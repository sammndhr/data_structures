"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  var top = Symbol('top'); //To keep top as private in stack

  var StackNode = function StackNode(data) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, StackNode);

    this.data = data;
    this.next = next;
  };

  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);

      this[top] = null;
    }

    _createClass(Stack, [{
      key: "push",
      value: function push(item) {
        var node = new StackNode(item);
        node.next = this[top];
        this[top] = node;
      }
    }, {
      key: "pop",
      value: function pop() {
        if (this[top] === null) return null;
        var item = this[top].data;
        this[top] = this[top].next;
        return item;
      }
    }, {
      key: "peek",
      value: function peek() {
        if (this[top] === null) return null;
        return this[top].data;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this[top] === null;
      }
    }, {
      key: "printStack",
      value: function printStack() {
        var result = [];
        var curr = this[top];

        while (curr) {
          result.push(curr.data);
          curr = curr.next;
        } // console.log(result)


        return result;
      }
    }, {
      key: "stackToString",
      value: function stackToString() {
        return JSON.stringify(this.printStack());
      }
    }]);

    return Stack;
  }();

  return Stack;
}();

module.exports = Stack;