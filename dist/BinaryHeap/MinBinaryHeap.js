"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

// https://www.youtube.com/watch?v=WCm3TqScBM8
// Any node has a value at least as small as the values in that node's children.
// Source: https://eloquentjavascript.net/1st_edition/appendix2.html
var MinBinaryHeap = /*#__PURE__*/function () {
  function MinBinaryHeap() {
    _classCallCheck(this, MinBinaryHeap);

    _sinkDown.add(this);

    _bubbleUp.add(this);

    _swap.add(this);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  } // Private class methods


  _createClass(MinBinaryHeap, [{
    key: "printMinHeap",
    // Public class methods
    value: function printMinHeap() {
      console.log(_classPrivateFieldGet(this, _content));
      return _classPrivateFieldGet(this, _content);
    }
    /* insert
      1. insert new item into this.#content
      2. bubble it up 
      */

  }, {
    key: "insert",
    value: function insert(element) {
      _classPrivateFieldGet(this, _content).push(element);

      _classPrivateMethodGet(this, _bubbleUp, _bubbleUp2).call(this, _classPrivateFieldGet(this, _content).length - 1);
    }
    /* extractMin
      1. swap first and last items if this.#content.length > 1 (or first !== last)
      2. pop out last item of array and save it in result
      3. If length is more than one, bubble the first item down
      4. Return the result that was saved 
      */

  }, {
    key: "extractMin",
    value: function extractMin() {
      if (_classPrivateFieldGet(this, _content).length <= 0) return null; //return null if array is empty

      var lastIndex = _classPrivateFieldGet(this, _content).length - 1,
          firstIndex = 0;
      if (firstIndex !== lastIndex) _classPrivateMethodGet(this, _swap, _swap2).call(this, firstIndex, lastIndex);

      var result = _classPrivateFieldGet(this, _content).pop();

      if (_classPrivateFieldGet(this, _content).length > 0) {
        _classPrivateMethodGet(this, _sinkDown, _sinkDown2).call(this, 0);
      }

      return result;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      for (var i = 0; i < this.size; i++) {
        // if curr item doesn't match the element to remove, continue searching
        if (_classPrivateFieldGet(this, _content)[i] !== element) continue; // if it does match

        var lastIndex = this.size - 1; // if it's the last item, pop it and break

        if (i === lastIndex) {
          _classPrivateFieldGet(this, _content).pop();

          break;
        } // if it's not the last item
        //  1. swap it with the last item
        //  2. pop the swapped last item
        //  3. Then call bubbleUp and sinkDown.


        _classPrivateMethodGet(this, _swap, _swap2).call(this, i, lastIndex);

        _classPrivateFieldGet(this, _content).pop();

        _classPrivateMethodGet(this, _bubbleUp, _bubbleUp2).call(this, i);

        _classPrivateMethodGet(this, _sinkDown, _sinkDown2).call(this, i);

        break;
      }
    }
  }, {
    key: "size",
    get: function get() {
      return _classPrivateFieldGet(this, _content).length;
    }
  }, {
    key: "min",
    get: function get() {
      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;
    }
  }]);

  return MinBinaryHeap;
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
  /* 
    indexing from 0
    p is the index of the parent
    i is the index of either left or right child
    l is index of left child
    r is the index of the right child
     l = 2p + 1
    r = 2p + 2
    p = Math.floor((i-1)/2)
   */


  while (i > 0) {
    var p = Math.floor((i - 1) / 2),
        parent = _classPrivateFieldGet(this, _content)[p];

    if (element < parent) {
      _classPrivateMethodGet(this, _swap, _swap2).call(this, p, i); // make sure to change index to that of parent after swapping


      i = p;
    } else {
      break;
    }
  }
};

var _sinkDown2 = function _sinkDown2(p) {
  var element = _classPrivateFieldGet(this, _content)[p],
      lastIndex = _classPrivateFieldGet(this, _content).length - 1;

  while (p < lastIndex) {
    // Info in getting index in bubbleUp
    var r = 2 * p + 2,
        l = r - 1; //Or 2 * p + 1

    var swapIndex = null,
        left = void 0,
        right = void 0,
        min = element; //start out assuming the min between left, right, element is the element
    // if element has left child, compare
    // if left child < element, set swapIndex to the left index (l) and min to left

    if (l <= lastIndex) {
      left = _classPrivateFieldGet(this, _content)[l];
      if (left < element) swapIndex = l;
      min = left;
    }

    if (r <= lastIndex) {
      right = _classPrivateFieldGet(this, _content)[r]; // compare the right to the min so far to make sure the min of the three items gets bubbled up while the parent gets sunk

      if (right < min) swapIndex = r;
    } // parent is smaller than both left and right child so break


    if (swapIndex == null) break;

    _classPrivateMethodGet(this, _swap, _swap2).call(this, p, swapIndex); // set the parent index to the swap index so it will continue to sink down


    p = swapIndex;
  }
};

module.exports = MinBinaryHeap;