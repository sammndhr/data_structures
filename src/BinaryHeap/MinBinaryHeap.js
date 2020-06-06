// https://www.youtube.com/watch?v=WCm3TqScBM8

// Any node has a value at least as small as the values in that node's children.

// Source: https://eloquentjavascript.net/1st_edition/appendix2.html

class MinBinaryHeap {
  #content
  constructor() {
    this.#content = []
  }

  // Private class methods
  #swap(i, j) {
    const temp = this.#content[i]
    this.#content[i] = this.#content[j]
    this.#content[j] = temp
  }
  /* bubbleUp 
    1. Compare item to parent and check if it's less than parent. 
    2. If it is less than parent, swap it. 
    3. Now, compare to the new parent and keep swapping until it either reaches the top of the heap or it is >= parent. 
  */
  #bubbleUp(i) {
    const element = this.#content[i]
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
      const p = Math.floor((i - 1) / 2),
        parent = this.#content[p]

      if (element < parent) {
        this.#swap(p, i)
        // make sure to change index to that of parent after swapping
        i = p
      } else {
        break
      }
    }
  }
  /* sinkDown
    1. Check the minimum value between the parent, left child and right child. 
    2. If parent is the min, you don't need to sink it down anymore. 
    3. If either child is minimum, swap the parent with the minimum child.
    4. Set the parent index to the child's index and continue to sink down the new parent. 
  */
  #sinkDown(p) {
    const element = this.#content[p],
      lastIndex = this.#content.length - 1

    while (p < lastIndex) {
      const r = 2 * p + 2,
        l = r - 1 //Or 2 * p + 1

      let swapIndex = null,
        left = this.#content[l],
        right = this.#content[r],
        min = element //start out assuming the min between left, right, element is the element

      // if left child < element, set swapIndex to the left index (l) and min to left
      if (left < element) {
        // Don't need to check if left is undefined because undefined < number is always false
        swapIndex = l
        min = left
      }

      // compare the right to the min so far to make sure the min of the three items gets bubbled up while the parent gets sunk
      if (right < min) {
        swapIndex = r
      }

      // parent is smaller than both left and right child so break
      if (swapIndex == null) break

      this.#swap(p, swapIndex)
      // set the parent index to the swap index so it will continue to sink down
      p = swapIndex
    }
  }

  // Getters
  get size() {
    return this.#content.length
  }

  get min() {
    return this.size ? this.#content[0] : null
  }
  get size() {
    return this.#content.length
  }

  get min() {
    return this.size ? this.#content[0] : null
  }

  // Public class methods
  printMinHeap() {
    console.log(this.#content)
    return this.#content
  }

  /* insert
    1. insert new item into this.#content
    2. bubble it up 
    */
  insert(element) {
    this.#content.push(element)
    this.#bubbleUp(this.#content.length - 1)
  }

  /* extractMin
    1. swap first and last items if this.#content.length > 1 (or first !== last)
    2. pop out last item of array and save it in min
    3. If length is more than one, bubble the first item down
    4. Return the min that was saved 
    */
  extractMin() {
    if (this.#content.length <= 0) return null //return null if array is empty

    const lastIndex = this.#content.length - 1,
      firstIndex = 0

    if (firstIndex !== lastIndex) this.#swap(firstIndex, lastIndex)

    const min = this.#content.pop()

    if (this.#content.length > 0) {
      this.#sinkDown(0)
    }

    return min
  }

  remove(element) {
    for (let i = 0; i < this.size; i++) {
      // if curr item doesn't match the element to remove, continue searching
      if (this.#content[i] !== element) continue

      // if it does match
      const lastIndex = this.size - 1
      // if it's the last item, pop it and break
      if (i === lastIndex) {
        this.#content.pop()
        break
      }
      // if it's not the last item
      //  1. swap it with the last item
      //  2. pop the swapped last item
      //  3. Then call bubbleUp and sinkDown.

      this.#swap(i, lastIndex)
      this.#content.pop()
      this.#bubbleUp(i)
      this.#sinkDown(i)
      break
    }
  }
}

module.exports = MinBinaryHeap
