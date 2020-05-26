"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Queue = require('./Queue');

var Stack = require('./Stack'); // breadth first search with queue


var BFS = function BFS(start, graph, callback) {
  // will keep track of new vertices with queue and visited nodes with a set
  var queue = new Queue(),
      visited = new Set();
  queue.enqueue(start); //vertex is visited if it gets pushed into queue.

  visited.add(start);

  while (!queue.isEmpty()) {
    var curr = queue.dequeue(),
        edges = graph.getVertexEdges(curr); // call callback on each vertex that gets dequeued

    callback(curr); //iterate over all edges and add the unvisited ones to queue

    var _iterator = _createForOfIteratorHelper(edges),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var eVal = _step.value;

        if (!visited.has(eVal)) {
          queue.enqueue(eVal);
          visited.add(eVal);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}; //iterative depth first search. Almost same as BFS. Only difference is the stack vs queue


var DFSIterative = function DFSIterative(start, graph, callback) {
  var stack = new Stack(),
      visited = new Set();
  stack.push(start);
  visited.add(start);

  while (!stack.isEmpty()) {
    var curr = stack.pop(),
        edges = graph.getVertexEdges(curr);
    callback(curr);

    var _iterator2 = _createForOfIteratorHelper(edges),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var eVal = _step2.value;

        if (!visited.has(eVal)) {
          stack.push(eVal);
          visited.add(eVal);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}; // Recursive depth first search


var DFSRecursive = function DFSRecursive(start, graph, callback) {
  var visited = new Set();

  var recursiveDFS = function recursiveDFS(curr) {
    if (visited.has(curr)) return;
    callback(curr);
    visited.add(curr);
    var edges = graph.getVertexEdges(curr);

    var _iterator3 = _createForOfIteratorHelper(edges),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var eVal = _step3.value;

        if (!visited.has(eVal)) {
          recursiveDFS(eVal);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };

  recursiveDFS(start);
};

module.exports = {
  BFS: BFS,
  DFSRecursive: DFSRecursive,
  DFSIterative: DFSIterative
};