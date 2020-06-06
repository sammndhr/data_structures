"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var MaxBinaryHeap = /*#__PURE__*/function () {
  function MaxBinaryHeap() {
    _classCallCheck(this, MaxBinaryHeap);

    _sinkDown.add(this);

    _bubbleUp.add(this);

    _swap.add(this);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  } // Private class methods


  _createClass(MaxBinaryHeap, [{
    key: "printMaxHeap",
    // public class methods
    value: function printMaxHeap() {
      console.log(_classPrivateFieldGet(this, _content));
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "insert",
    value: function insert(element) {
      _classPrivateFieldGet(this, _content).push(element);

      _classPrivateMethodGet(this, _bubbleUp, _bubbleUp2).call(this, this.size - 1);
    }
  }, {
    key: "extractMax",
    value: function extractMax() {
      if (this.size <= 0) return null;
      var lastIndex = this.size - 1,
          firstIndex = 0;
      if (firstIndex !== lastIndex) _classPrivateMethodGet(this, _swap, _swap2).call(this, firstIndex, lastIndex);

      var max = _classPrivateFieldGet(this, _content).pop();

      if (this.size > 0) {
        _classPrivateMethodGet(this, _sinkDown, _sinkDown2).call(this, 0);
      }

      return max;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      for (var i = 0; i < this.size; i++) {
        if (_classPrivateFieldGet(this, _content)[i] !== element) continue;
        var lastIndex = this.size - 1;

        if (i === lastIndex) {
          _classPrivateFieldGet(this, _content).pop();

          break;
        }

        _classPrivateMethodGet(this, _swap, _swap2).call(this, i, lastIndex);

        _classPrivateFieldGet(this, _content).pop();

        _classPrivateMethodGet(this, _bubbleUp, _bubbleUp2).call(this, i);

        _classPrivateMethodGet(this, _sinkDown, _sinkDown2).call(this, i);

        break;
      }
    }
  }, {
    key: "size",
    // getters
    get: function get() {
      return _classPrivateFieldGet(this, _content).length;
    }
  }, {
    key: "max",
    get: function get() {
      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;
    }
  }]);

  return MaxBinaryHeap;
}();

var _content = new WeakMap();

var _swap = new WeakSet();

var _bubbleUp = new WeakSet();

var _sinkDown = new WeakSet();

var _swap2 = function _swap2(i, j) {
  var temp = _classPrivateFieldGet(this, _content)[i];

  _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];
  _classPrivateFieldGet(this, _content)[j] = temp;
};

var _bubbleUp2 = function _bubbleUp2(i) {
  var element = _classPrivateFieldGet(this, _content)[i];

  while (i > 0) {
    var p = Math.floor((i - 1) / 2),
        parent = _classPrivateFieldGet(this, _content)[p];

    if (element > parent) {
      _classPrivateMethodGet(this, _swap, _swap2).call(this, p, i);

      i = p;
    } else {
      break;
    }
  }
};

var _sinkDown2 = function _sinkDown2(p) {
  var element = _classPrivateFieldGet(this, _content)[p],
      lastIndex = this.size - 1;

  while (p < lastIndex) {
    var r = 2 * p + 2,
        l = r - 1;

    var swapIndex = null,
        left = _classPrivateFieldGet(this, _content)[l],
        right = _classPrivateFieldGet(this, _content)[r],
        max = element;

    if (left > element) {
      swapIndex = l;
      max = left;
    }

    if (right > max) {
      swapIndex = r;
    }

    if (swapIndex == null) break;

    _classPrivateMethodGet(this, _swap, _swap2).call(this, p, swapIndex);

    p = swapIndex;
  }
};

module.exports = MaxBinaryHeap;