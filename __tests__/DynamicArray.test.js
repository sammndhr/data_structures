const { DynamicArray } = require('../src')

test('creates a new instance of DynamicArray', () => {
  const arr = new DynamicArray()
  expect(arr instanceof DynamicArray).toBe(true)
})

describe('array', () => {
  test('Returns the array', () => {
    const arr = new DynamicArray()
    arr.push(1)
    arr.push(2)
    expect(arr.array).toEqual([1, 2])
  })
})

describe('push', () => {
  test('Pushes single item to end of array', () => {
    const arr = new DynamicArray()
    arr.push(1)
    arr.push(2)
    expect(arr.array).toEqual([1, 2])
  })
  test('Returns length of array', () => {
    const arr = new DynamicArray()

    expect(arr.push(2)).toBe(1)
  })
  test('Pushes multiple items to end of array in order', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.array).toEqual([1, 2, 3, 4])
  })

  test('Increments length of array by number of items pushed', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.length).toEqual(4)
  })

  test('Resizes array and increases capacity if array is at max capacity', () => {
    const arr = new DynamicArray()
    expect(arr.capacity).toEqual(1)
    arr.push(1, 2, 3, 4)
    expect(arr.capacity).toEqual(4)
  })
})

describe('pop', () => {
  test('Removes single item from end of array', () => {
    const arr = new DynamicArray()
    arr.push(1, 2)
    expect(arr.pop()).toBe(2)
    expect(arr.array).toEqual([1])
  })
  test('Decrements length of array', () => {
    const arr = new DynamicArray()
    arr.push(1, 2)
    expect(arr.pop()).toBe(2)
    expect(arr.length).toEqual(1)
  })
})

describe('get', () => {
  test('Returns the value at given array index if it exists', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)

    expect(arr.get(3)).toBe(4)
  })
  test('Returns undefined if index is greater than array length', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.get(4)).toBe(undefined)
  })
  test('Returns undefined if index is less than array length', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.get(-1)).toBe(undefined)
  })
})

describe('set', () => {
  test('Sets array value at given index and returns the value', () => {
    const arr = new DynamicArray()
    expect(arr.set(1, 'one')).toBe('one')
  })
  test('Sets length of the array to the correct length', () => {
    const arr = new DynamicArray()
    arr.set(1, 'one')
    expect(arr.length).toBe(2)
  })
  test('Increments length by 1 if index is equal to the length', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    arr.set(4, 'four')
    expect(arr.length).toBe(5)
  })
  test('Does not change length of the array if the index is less than the length', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.length).toBe(4)
    arr.set(0, 'zero')
    expect(arr.length).toBe(4)
  })
  test('Resizes array and increases capacity if index is greater than capacity', () => {
    const arr = new DynamicArray()
    expect(arr.capacity).toEqual(1)
    arr.set(3, 'three')
    expect(arr.capacity).toEqual(4)
  })
})

describe('get array', () => {
  test('Gets and return array', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.array).toEqual([1, 2, 3, 4])
  })
})

describe('get length', () => {
  test('Gets and return length of array', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3, 4)
    expect(arr.length).toBe(4)
  })
})

describe('get capacity', () => {
  test('Gets and return capacity of array', () => {
    const arr = new DynamicArray()
    arr.push(1, 2, 3)
    expect(arr.capacity).toBe(4)
  })
})
