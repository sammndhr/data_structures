"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* https://reactgo.com/hashtable-javascript/ */

/*
Rudimentary javascript hash table resolving collisions with separate chaining. 
Todo: Resolve conflicts with Linear Probing, Separate Chaining (linked lists)
*/
var HashTable = /*#__PURE__*/function () {
  function HashTable() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;

    _classCallCheck(this, HashTable);

    this.buckets = new Array(size);
    this.size = size;
  }

  _createClass(HashTable, [{
    key: "hash",
    value: function hash(key) {
      return key.toString().length % this.size;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var i = this.hash(key); // if no collision, set the bucket at position i to array

      if (!this.buckets[i]) this.buckets[i] = []; // push [key, val] into the array

      this.buckets[i].push([key, value]);
      return i;
    }
  }, {
    key: "get",
    value: function get(key) {
      var i = this.hash(key);
      if (!this.buckets[i]) return null; // check each pair inside the bucket at position i
      // if key matches key at pair[0] return the val at pair[1]

      var _iterator = _createForOfIteratorHelper(this.buckets[i]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          if (pair[0] === key) return pair[1];
        } // if key doesn't exist return null

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }]);

  return HashTable;
}();

module.exports = HashTable;