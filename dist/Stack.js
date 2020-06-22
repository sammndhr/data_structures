"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  var StackNode = function StackNode(data) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, StackNode);

    this.data = data;
    this.next = next;
  };

  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);

      _top.set(this, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldSet(this, _top, null);
    }

    _createClass(Stack, [{
      key: "push",
      value: function push(item) {
        var node = new StackNode(item);
        node.next = _classPrivateFieldGet(this, _top);

        _classPrivateFieldSet(this, _top, node);
      }
    }, {
      key: "pop",
      value: function pop() {
        if (_classPrivateFieldGet(this, _top) === null) return null;

        var item = _classPrivateFieldGet(this, _top).data;

        _classPrivateFieldSet(this, _top, _classPrivateFieldGet(this, _top).next);

        return item;
      }
    }, {
      key: "peek",
      value: function peek() {
        if (_classPrivateFieldGet(this, _top) === null) return null;
        return _classPrivateFieldGet(this, _top).data;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return _classPrivateFieldGet(this, _top) === null;
      }
    }, {
      key: "printStack",
      value: function printStack() {
        var result = [];

        var curr = _classPrivateFieldGet(this, _top);

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

  var _top = new WeakMap();

  return Stack;
}();

module.exports = Stack;