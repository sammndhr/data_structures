"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

// https://www.youtube.com/watch?v=WCm3TqScBM8
// Any node has a value at least as small as the values in that node's children.
// Source: https://eloquentjavascript.net/1st_edition/appendix2.html
var MinBinaryHeap = /*#__PURE__*/function () {
  function MinBinaryHeap() {
    _classCallCheck(this, MinBinaryHeap);

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _content, []);
  }

  _createClass(MinBinaryHeap, [{
    key: "_swap",
    // _methods are helpers. Change to private when private instance methods are supported
    value: function _swap(i, j) {
      var temp = _classPrivateFieldGet(this, _content)[i];

      _classPrivateFieldGet(this, _content)[i] = _classPrivateFieldGet(this, _content)[j];
      _classPrivateFieldGet(this, _content)[j] = temp;
    }
    /* bubbleUp 
      1. Compare item to parent and check if it's less than parent. 
      2. If it is less than parent, swap it. 
      3. Now, compare to the new parent and keep swapping until it either reaches the top of the heap or it is >= parent. 
    */

  }, {
    key: "_bubbleUp",
    value: function _bubbleUp(i) {
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
          this._swap(p, i); // make sure to change index to that of parent after swapping


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

        this._swap(p, swapIndex); // set the parent index to the swap index so it will continue to sink down


        p = swapIndex;
      }
    }
  }, {
    key: "printMinHeap",
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

      this._bubbleUp(_classPrivateFieldGet(this, _content).length - 1);
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
    key: "min",
    get: function get() {
      return this.size ? _classPrivateFieldGet(this, _content)[0] : null;
    }
  }]);

  return MinBinaryHeap;
}();

var _content = new WeakMap();

module.exports = MinBinaryHeap;