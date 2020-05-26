"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  var QueueNode = function QueueNode(data) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, QueueNode);

    this.data = data;
    this.next = next;
  };

  var Queue = /*#__PURE__*/function () {
    //Look in ./LinkedList.js to see other ways of declaring private static fields https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_fields
    function Queue() {
      _classCallCheck(this, Queue);

      _first.set(this, {
        writable: true,
        value: void 0
      });

      _last.set(this, {
        writable: true,
        value: void 0
      });

      _size.set(this, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldSet(this, _first, null);

      _classPrivateFieldSet(this, _last, null);

      _classPrivateFieldSet(this, _size, 0);
    }

    _createClass(Queue, [{
      key: "enqueue",
      value: function enqueue(item) {
        var _this$size;

        var node = new QueueNode(item);

        if (_classPrivateFieldGet(this, _last)) {
          _classPrivateFieldGet(this, _last).next = node;
        }

        _classPrivateFieldSet(this, _last, node);

        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _last));
        _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
      }
    }, {
      key: "dequeue",
      value: function dequeue() {
        var _this$size2;

        if (!_classPrivateFieldGet(this, _first)) return null;

        var data = _classPrivateFieldGet(this, _first).data;

        _classPrivateFieldSet(this, _first, _classPrivateFieldGet(this, _first).next);

        if (!_classPrivateFieldGet(this, _first)) _classPrivateFieldSet(this, _last, null);
        _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) - 1), _this$size2;
        return data;
      }
    }, {
      key: "peek",
      value: function peek() {
        if (!_classPrivateFieldGet(this, _first)) return null;
        return _classPrivateFieldGet(this, _first).data;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return _classPrivateFieldGet(this, _first) === null;
      }
    }, {
      key: "printQueue",
      value: function printQueue() {
        var result = [];

        var curr = _classPrivateFieldGet(this, _first);

        while (curr) {
          result.push(curr.data);
          curr = curr.next;
        }

        console.log(result);
        return result;
      }
    }, {
      key: "size",
      get: function get() {
        return _classPrivateFieldGet(this, _size);
      }
    }]);

    return Queue;
  }();

  var _first = new WeakMap();

  var _last = new WeakMap();

  var _size = new WeakMap();

  return Queue;
}();

module.exports = Queue;