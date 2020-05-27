"use strict";

var _temp, _root;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/* 

https://leetcode.com/problems/implement-trie-prefix-tree/solution/
Visualize a trie as a 26 by n matrix with one way relation between the letters in different levels. n is the length of the longest word in the trie.

words — deed, nom, noon

a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
           ↘                            ↘ 
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
            ↓                           ↙ ↓
            ↓                         ↙   ↓
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...
          ↙                             ↙
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o ...

The root would look like:

const trie =
{
  d: { e: { e: { d: { isWord: true } } } },
  n: { o: { o: { n: { isWord: true } },
       m: { isWord: true } }
     }
}

*/
// We'll assume that the words provided will consist of letters only and are always lowercase
var Trie = (_temp = /*#__PURE__*/function () {
  function Trie() {
    _classCallCheck(this, Trie);

    _root.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _root, {});
  }

  _createClass(Trie, [{
    key: "_traverse",
    // helper. Change to private when private instance methods are supported
    value: function _traverse(word) {
      var curr = _classPrivateFieldGet(this, _root);

      var _iterator = _createForOfIteratorHelper(word),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ch = _step.value;
          if (!curr) return null;
          curr = curr[ch];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return curr;
    }
  }, {
    key: "insert",
    value: function insert(word) {
      var curr = _classPrivateFieldGet(this, _root);

      var _iterator2 = _createForOfIteratorHelper(word),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ch = _step2.value;
          curr[ch] = curr[ch] ? curr[ch] : {};
          curr = curr[ch];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      curr.isWord = true;
    }
  }, {
    key: "search",
    value: function search(word) {
      var node = this._traverse(word);

      return node !== null && node.isWord === true;
    }
  }, {
    key: "startsWith",
    value: function startsWith(word) {
      return this._traverse(word) !== null;
    }
  }, {
    key: "root",
    get: function get() {
      return _classPrivateFieldGet(this, _root);
    }
  }]);

  return Trie;
}(), _root = new WeakMap(), _temp);
module.exports = Trie;