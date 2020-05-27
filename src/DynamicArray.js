class DynamicArray {
  #array
  #length
  #capacity

  constructor() {
    this.#array = []
    this.#capacity = 1
    this.#length = 0
  }

  /* The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static */
  static #copyArray(array, capacity, length) {
    const resArr = new Array(capacity)
    for (let i = 0; i < length; i++) {
      resArr[i] = array[i]
    }
    return resArr
  }

  //Private methods
  #resize() {
    this.#capacity = 2 * this.#capacity
    const resized = DynamicArray.#copyArray(
      this.#array,
      this.#capacity,
      this.#length
    )

    this.#array = resized
  }

  #pushOne(data) {
    if (this.#length === this.#capacity) {
      this.#resize()
    }
    this.#array[this.#length] = data
    this.#length++
  }

  // Public Methods

  /* Replicating javascript array behavior with push method allowing
  one or more args and returning the length of array. */
  push() {
    const args = [...arguments]
    for (const curr of args) {
      this.#pushOne(curr)
    }
    return this.#length
  }

  pop() {
    if (this.#length <= 0) return
    const popped = this.#array[this.#length - 1]
    delete this.#array[this.#length - 1]
    this.#length--
    return popped
  }

  /* Return array val at given index.
  Return undefined like javascript array if index is beyond length */
  get(index) {
    if (index < this.#length) return this.#array[index]
  }

  /* Equivalent to javascript array[i] = 'some val'
  Resize and keep doubling the array until the index is < capacity
  Set the value of the array at that index
  Set the length to index + 1 if length is less than index + 1 */
  set(index, val) {
    // Js array will allow setting vals at negative index without incrementing length ¯\_(ツ)_/¯
    if (index < 0) throw new Error('Index must be greater than or equal to 0.')
    while (index > this.#capacity) {
      this.#resize()
    }
    this.#array[index] = val
    if (this.#length < index + 1) this.#length = index + 1
    return val
  }

  delete(index) {
    if (index >= 0 && index < this.#length && this.#length > 0) {
      for (let i = index; i < this.#length; i++) {
        this.#array[i] = this.#array[i + 1]
      }
      this.#length--
      return true
    }
    return false
  }

  // getters
  get array() {
    const resArr = DynamicArray.#copyArray(
      this.#array,
      this.#length,
      this.#length
    )

    return resArr
  }

  get length() {
    return this.#length
  }

  get capacity() {
    return this.#capacity
  }
}

module.exports = DynamicArray
