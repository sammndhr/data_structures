const { MinBinaryHeap } = require('../src')

describe('MinBinaryHeap', () => {
  test('creates a new instance of MinBinaryHeap', () => {
    const minHeap = new MinBinaryHeap()
    expect(minHeap instanceof MinBinaryHeap).toBe(true)
  })

  describe('printMinHeap', () => {
    test('prints all items of heap as an array', () => {
      const minHeap = new MinBinaryHeap()
      minHeap.insert(0)
      minHeap.insert(1)
      expect(minHeap.printMinHeap()).toEqual([0, 1])
    })
  })

  describe('insert', () => {
    test('inserts item at correct place in heap', () => {
      const minHeap = new MinBinaryHeap(),
        arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]

      for (const el of arr) {
        minHeap.insert(el)
      }
      expect(minHeap.printMinHeap()).toEqual([1, 2, 4, 2, 5, 9, 7, 10, 3, 8, 6])
    })
  })

  describe('scoped min heap', () => {
    let minHeap, length

    beforeEach(() => {
      minHeap = new MinBinaryHeap()
      const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]
      length = arr.length
      for (const el of arr) {
        minHeap.insert(el)
      }
    })

    describe('size', () => {
      test('gets correct size of min heap', () => {
        expect(minHeap.size).toEqual(length)
      })
      test('returns 0 if size of heap is 0', () => {
        const minHeap = new MinBinaryHeap()
        expect(minHeap.size).toBe(0)
      })
    })

    describe('min', () => {
      test('gets correct min of min heap', () => {
        expect(minHeap.min).toBe(1)
      })
      test('returns null if size of heap is 0', () => {
        const minHeap = new MinBinaryHeap()
        expect(minHeap.min).toBe(null)
      })
    })

    describe('extractMin', () => {
      test('removes the correct min item from heap and returns it', () => {
        const min = minHeap.extractMin(),
          heapContent = [2, 2, 4, 3, 5, 9, 7, 10, 6, 8]
        expect(min).toBe(1)
        expect(minHeap.printMinHeap()).toEqual(heapContent)
      })
      test('returns null if size of heap is 0', () => {
        const minHeap = new MinBinaryHeap()
        expect(minHeap.min).toEqual(null)
      })
    })

    describe('sinkDown', () => {
      test('sinks parent down correct path if both left and right child are less than parent', () => {
        const minHeap = new MinBinaryHeap(),
          arr = [2, 3, 4, 5]
        for (const el of arr) {
          minHeap.insert(el)
        }
        const min = minHeap.extractMin(),
          heapContent = [3, 5, 4]
        expect(min).toBe(2)
        expect(minHeap.printMinHeap()).toEqual(heapContent)
      })
      test('sinks parent down to the left if parent > left but parent < right', () => {
        const minHeap = new MinBinaryHeap(),
          arr = [2, 4, 6, 5]
        for (const el of arr) {
          minHeap.insert(el)
        }
        const min = minHeap.extractMin(),
          heapContent = [4, 5, 6]
        expect(min).toBe(2)
        expect(minHeap.printMinHeap()).toEqual(heapContent)
      })
      test('sinks parent down to the right if parent < left but parent > right', () => {
        const minHeap = new MinBinaryHeap(),
          arr = [2, 6, 4, 7, 8, 5]
        for (const el of arr) {
          minHeap.insert(el)
        }
        const min = minHeap.extractMin(),
          heapContent = [4, 6, 5, 7, 8]
        expect(min).toBe(2)
        expect(minHeap.printMinHeap()).toEqual(heapContent)
      })
    })
    describe('remove', () => {
      test('removes the correct item from heap', () => {
        minHeap.remove(2)
        const heapContent = [1, 2, 4, 3, 5, 9, 7, 10, 6, 8]
        expect(minHeap.printMinHeap()).toEqual(heapContent)
      })
    })
  })
})
