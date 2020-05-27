"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var DynamicArray = /*#__PURE__*/function () {
  function DynamicArray() {
    _classCallCheck(this, DynamicArray);

    _pushOne.add(this);

    _resize.add(this);

    _array.set(this, {
      writable: true,
      value: void 0
    });

    _length.set(this, {
      writable: true,
      value: void 0
    });

    _capacity.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _array, []);

    _classPrivateFieldSet(this, _capacity, 1);

    _classPrivateFieldSet(this, _length, 0);
  }
  /* The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static */


  _createClass(DynamicArray, [{
    key: "push",
    // Public Methods

    /* Replicating javascript array behavior with push method allowing
    one or more args and returning the length of array. */
    value: function push() {
      var args = Array.prototype.slice.call(arguments);

      var _iterator = _createForOfIteratorHelper(args),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var curr = _step.value;

          _classPrivateMethodGet(this, _pushOne, _pushOne2).call(this, curr);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _classPrivateFieldGet(this, _length);
    }
  }, {
    key: "pop",
    value: function pop() {
      var _this$length2;

      if (_classPrivateFieldGet(this, _length) <= 0) return;

      var popped = _classPrivateFieldGet(this, _array)[_classPrivateFieldGet(this, _length) - 1];

      delete _classPrivateFieldGet(this, _array)[_classPrivateFieldGet(this, _length) - 1];
      _classPrivateFieldSet(this, _length, (_this$length2 = +_classPrivateFieldGet(this, _length)) - 1), _this$length2;
      return popped;
    }
    /* Return array val at given index.
    Return undefined like javascript array if index is beyond length */

  }, {
    key: "get",
    value: function get(index) {
      if (index < _classPrivateFieldGet(this, _length)) return _classPrivateFieldGet(this, _array)[index];
    }
    /* Equivalent to javascript array[i] = 'some val'
    Resize and keep doubling the array until the index is < capacity
    Set the value of the array at that index
    Set the length to index + 1 if length is less than index + 1 */

  }, {
    key: "set",
    value: function set(index, val) {
      // Js array will allow setting vals at negative index without incrementing length ¯\_(ツ)_/¯
      if (index < 0) throw new Error('Index must be greater than or equal to 0.');

      while (index > _classPrivateFieldGet(this, _capacity)) {
        _classPrivateMethodGet(this, _resize, _resize2).call(this);
      }

      _classPrivateFieldGet(this, _array)[index] = val;
      if (_classPrivateFieldGet(this, _length) < index + 1) _classPrivateFieldSet(this, _length, index + 1);
      return val;
    }
  }, {
    key: "delete",
    value: function _delete(index) {
      if (index >= 0 && index < _classPrivateFieldGet(this, _length) && _classPrivateFieldGet(this, _length) > 0) {
        var _this$length3;

        for (var i = index; i < _classPrivateFieldGet(this, _length); i++) {
          _classPrivateFieldGet(this, _array)[i] = _classPrivateFieldGet(this, _array)[i + 1];
        }

        _classPrivateFieldSet(this, _length, (_this$length3 = +_classPrivateFieldGet(this, _length)) - 1), _this$length3;
        return true;
      }

      return false;
    } // getters

  }, {
    key: "array",
    get: function get() {
      var resArr = _classStaticPrivateMethodGet(DynamicArray, DynamicArray, _copyArray).call(DynamicArray, _classPrivateFieldGet(this, _array), _classPrivateFieldGet(this, _length), _classPrivateFieldGet(this, _length));

      return resArr;
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _length);
    }
  }, {
    key: "capacity",
    get: function get() {
      return _classPrivateFieldGet(this, _capacity);
    }
  }]);

  return DynamicArray;
}();

var _array = new WeakMap();

var _length = new WeakMap();

var _capacity = new WeakMap();

var _resize = new WeakSet();

var _pushOne = new WeakSet();

var _copyArray = function _copyArray(array, capacity, length) {
  var resArr = new Array(capacity);

  for (var i = 0; i < length; i++) {
    resArr[i] = array[i];
  }

  return resArr;
};

var _resize2 = function _resize2() {
  _classPrivateFieldSet(this, _capacity, 2 * _classPrivateFieldGet(this, _capacity));

  var resized = _classStaticPrivateMethodGet(DynamicArray, DynamicArray, _copyArray).call(DynamicArray, _classPrivateFieldGet(this, _array), _classPrivateFieldGet(this, _capacity), _classPrivateFieldGet(this, _length));

  _classPrivateFieldSet(this, _array, resized);
};

var _pushOne2 = function _pushOne2(data) {
  var _this$length;

  if (_classPrivateFieldGet(this, _length) === _classPrivateFieldGet(this, _capacity)) {
    _classPrivateMethodGet(this, _resize, _resize2).call(this);
  }

  _classPrivateFieldGet(this, _array)[_classPrivateFieldGet(this, _length)] = data;
  _classPrivateFieldSet(this, _length, (_this$length = +_classPrivateFieldGet(this, _length)) + 1), _this$length;
};

module.exports = DynamicArray;