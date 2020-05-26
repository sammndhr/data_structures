"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _require = require('./GraphTraversal'),
    _BFS = _require.BFS,
    DFSRecursive = _require.DFSRecursive;

var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);

    _vertices.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _vertices, new Map());
  }

  _createClass(Graph, [{
    key: "addVertex",
    value: function addVertex(val) {
      if (_classPrivateFieldGet(this, _vertices).has(val)) throw "vertex with value ".concat(val, " already exists.");

      _classPrivateFieldGet(this, _vertices).set(val, new Set());
    }
  }, {
    key: "addEdge",
    value: function addEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");
      if (!_classPrivateFieldGet(this, _vertices).has(eVal)) throw "edge with value ".concat(eVal, " doesn't exist.");

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      if (edges.has(eVal)) throw "vertex already has edge ".concat(eVal, ".");
      edges.add(eVal);
    }
  }, {
    key: "getVertexEdges",
    value: function getVertexEdges(vVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");
      return Array.from(_classPrivateFieldGet(this, _vertices).get(vVal));
    }
  }, {
    key: "hasEdge",
    value: function hasEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) return false;

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      return edges.has(eVal);
    }
  }, {
    key: "hasVertex",
    value: function hasVertex(vVal) {
      return _classPrivateFieldGet(this, _vertices).has(vVal);
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(vVal, eVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");

      var edges = _classPrivateFieldGet(this, _vertices).get(vVal);

      edges["delete"](eVal);
    }
  }, {
    key: "removeVertex",
    value: function removeVertex(vVal) {
      if (!_classPrivateFieldGet(this, _vertices).has(vVal)) throw "vertex with value ".concat(vVal, " doesn't exist.");

      _classPrivateFieldGet(this, _vertices)["delete"](vVal);
    }
  }, {
    key: "BFS",
    value: function BFS(start, callback) {
      var graph = this;

      _BFS(start, graph, callback);
    }
  }, {
    key: "DFS",
    value: function DFS(start, callback) {
      var graph = this;
      DFSRecursive(start, graph, callback);
    }
  }, {
    key: "printGraph",
    value: function printGraph() {
      var graph = {};

      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _vertices)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              vVal = _step$value[0],
              vertexEdges = _step$value[1];

          graph[vVal] = [];
          var edges = '';

          var _iterator2 = _createForOfIteratorHelper(vertexEdges),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var edge = _step2.value;
              edges += "".concat(edge, " ");
              graph[vVal].push(edge);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          console.log("".concat(vVal, " -> ").concat(edges));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return graph;
    }
  }]);

  return Graph;
}();

var _vertices = new WeakMap();

module.exports = Graph;