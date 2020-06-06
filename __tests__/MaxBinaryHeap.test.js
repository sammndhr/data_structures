const { MaxBinaryHeap } = require('../src')

describe('MaxBinaryHeap', () => {
  test('creates a new instance of MaxBinaryHeap', () => {
    const maxHeap = new MaxBinaryHeap()
    expect(maxHeap instanceof MaxBinaryHeap).toBe(true)
  })

  describe('printMaxHeap', () => {
    test('prints all items of heap as an array', () => {
      const maxHeap = new MaxBinaryHeap()
      maxHeap.insert(0)
      maxHeap.insert(1)
      expect(maxHeap.printMaxHeap()).toEqual([1, 0])
    })
  })

  describe('insert', () => {
    test('inserts item at correct place in heap', () => {
      const maxHeap = new MaxBinaryHeap(),
        arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]

      for (const el of arr) {
        maxHeap.insert(el)
      }
      expect(maxHeap.printMaxHeap()).toEqual([10, 8, 9, 3, 6, 4, 7, 1, 2, 2, 5])
    })
  })

  describe('scoped max heap', () => {
    let maxHeap, length

    beforeEach(() => {
      maxHeap = new MaxBinaryHeap()
      const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]
      length = arr.length
      for (const el of arr) {
        maxHeap.insert(el)
      }
    })

    describe('size', () => {
      test('gets correct size of max heap', () => {
        expect(maxHeap.size).toEqual(length)
      })
      test('returns 0 if size of heap is 0', () => {
        const maxHeap = new MaxBinaryHeap()
        expect(maxHeap.size).toBe(0)
      })
    })

    describe('max', () => {
      test('gets correct max of max heap', () => {
        expect(maxHeap.max).toBe(10)
      })
      test('returns null if size of heap is 0', () => {
        const maxHeap = new MaxBinaryHeap()
        expect(maxHeap.max).toBe(null)
      })
    })

    describe('extractMax', () => {
      test('removes the correct max item from heap and returns it', () => {
        const max = maxHeap.extractMax(),
          heapContent = [9, 8, 7, 3, 6, 4, 5, 1, 2, 2]
        expect(max).toBe(10)
        expect(maxHeap.printMaxHeap()).toEqual(heapContent)
      })

      test('returns null if size of heap is 0', () => {
        const maxHeap = new MaxBinaryHeap()
        expect(maxHeap.max).toEqual(null)
      })
    })

    describe('sinkDown', () => {
      test('sinks parent down correct path if both left and right child are greater than parent', () => {
        const maxHeap = new MaxBinaryHeap(),
          arr = [7, 6, 5, 1, 2, 4]
        for (const el of arr) {
          maxHeap.insert(el)
        }
        const max = maxHeap.extractMax(),
          heapContent = [6, 4, 5, 1, 2]
        expect(max).toBe(7)
        expect(maxHeap.printMaxHeap()).toEqual(heapContent)
      })
      test('sinks parent down to the left if parent < left but parent > right', () => {
        const maxHeap = new MaxBinaryHeap(),
          arr = [8, 6, 1, 2]
        for (const el of arr) {
          maxHeap.insert(el)
        }
        const max = maxHeap.extractMax(),
          heapContent = [6, 2, 1]
        expect(max).toBe(8)
        expect(maxHeap.printMaxHeap()).toEqual(heapContent)
      })
      test('sinks parent down to the right if parent > left but parent < right', () => {
        const maxHeap = new MaxBinaryHeap(),
          arr = [8, 3, 6, 2, 1, 4]
        for (const el of arr) {
          maxHeap.insert(el)
        }
        const max = maxHeap.extractMax(),
          heapContent = [6, 3, 4, 2, 1]
        expect(max).toBe(8)
        expect(maxHeap.printMaxHeap()).toEqual(heapContent)
      })
    })

    describe('remove', () => {
      test('removes the correct item from heap', () => {
        maxHeap.remove(2)
        const heapContent = [10, 8, 9, 5, 6, 4, 7, 1, 3, 2]
        expect(maxHeap.printMaxHeap()).toEqual(heapContent)
      })
    })
  })
})
