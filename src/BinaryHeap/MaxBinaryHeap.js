class MaxBinaryHeap {
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

  #bubbleUp(i) {
    const element = this.#content[i]

    while (i > 0) {
      const p = Math.floor((i - 1) / 2),
        parent = this.#content[p]

      if (element > parent) {
        this.#swap(p, i)

        i = p
      } else {
        break
      }
    }
  }

  #sinkDown(p) {
    const element = this.#content[p],
      lastIndex = this.#content.length - 1

    while (p < lastIndex) {
      const r = 2 * p + 2,
        l = r - 1

      let swapIndex = null,
        left,
        right,
        min = element
      if (l <= lastIndex) {
        left = this.#content[l]

        if (left > element) swapIndex = l
        min = left
      }

      if (r <= lastIndex) {
        right = this.#content[r]

        if (right > min) swapIndex = r
      }

      if (swapIndex == null) break

      this.#swap(p, swapIndex)

      p = swapIndex
    }
  }

  // getters
  get size() {
    return this.#content.length
  }

  get max() {
    return this.size ? this.#content[0] : null
  }

  // public class methods
  printMaxHeap() {
    console.log(this.#content)
    return this.#content
  }

  insert(element) {
    this.#content.push(element)
    this.#bubbleUp(this.#content.length - 1)
  }

  extractMax() {
    if (this.#content.length <= 0) return null

    const lastIndex = this.#content.length - 1,
      firstIndex = 0

    if (firstIndex !== lastIndex) this.#swap(firstIndex, lastIndex)

    const result = this.#content.pop()

    if (this.#content.length > 0) {
      this.#sinkDown(0)
    }

    return result
  }

  remove(element) {
    for (let i = 0; i < this.size; i++) {
      if (this.#content[i] !== element) continue

      const lastIndex = this.size - 1

      if (i === lastIndex) {
        this.#content.pop()
        break
      }

      this.#swap(i, lastIndex)
      this.#content.pop()
      this.#bubbleUp(i)
      this.#sinkDown(i)
      break
    }
  }
}

module.exports = MaxBinaryHeap
