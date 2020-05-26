"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var MaxBinaryHeap = /*#__PURE__*/function () {
  function MaxBinaryHeap() {
    _classCallCheck(this, MaxBinaryHeap);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  }

  _createClass(MaxBinaryHeap, [{
    key: "_swap",
    // _methods are helpers. Change to private when private instance methods are supported
    value: function _swap(i, j) {
      var temp = _classPrivateFieldGet(this, _content)[i];

      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];
      _classPrivateFieldGet(this, _content)[j] = temp;
    }
  }, {
    key: "_bubbleUp",
    value: function _bubbleUp(i) {
      var element = _classPrivateFieldGet(this, _content)[i];

      while (i > 0) {
        var p = Math.floor((i - 1) / 2),
            parent = _classPrivateFieldGet(this, _content)[p];

        if (element > parent) {
          this._swap(p, i);

          i = p;
        } else {
          break;
        }
      }
    }
  }, {
    key: "_sinkDown",
    value: function _sinkDown(p) {
      var element = _classPrivateFieldGet(this, _content)[p],
          lastIndex = _classPrivateFieldGet(this, _content).length - 1;

      while (p < lastIndex) {
        var r = 2 * p + 2,
            l = r - 1;
        var swapIndex = null,
            left = void 0,
            right = void 0,
            min = element;

        if (l <= lastIndex) {
          left = _classPrivateFieldGet(this, _content)[l];
          if (left > element) swapIndex = l;
          min = left;
        }

        if (r <= lastIndex) {
          right = _classPrivateFieldGet(this, _content)[r];
          if (right > min) swapIndex = r;
        }

        if (swapIndex == null) break;

        this._swap(p, swapIndex);

        p = swapIndex;
      }
    }
  }, {
    key: "printMaxHeap",
    value: function printMaxHeap() {
      console.log(_classPrivateFieldGet(this, _content));
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "insert",
    value: function insert(element) {
      _classPrivateFieldGet(this, _content).push(element);

      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);
    }
  }, {
    key: "extractMax",
    value: function extractMax() {
      if (_classPrivateFieldGet(this, _content).length <= 0) return null;
      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,
          firstIndex = 0;
      if (firstIndex !== lastIndex) this._swap(firstIndex, lastIndex);

      var result = _classPrivateFieldGet(this, _content).pop();

      if (_classPrivateFieldGet(this, _content).length > 0) {
        this._sinkDown(0);
      }

      return result;
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

        this._swap(i, lastIndex);

        _classPrivateFieldGet(this, _content).pop();

        this._bubbleUp(i);

        this._sinkDown(i);

        break;
      }
    }
  }, {
    key: "size",
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

module.exports = MaxBinaryHeap;