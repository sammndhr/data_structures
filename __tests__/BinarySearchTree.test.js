const { BinarySearchTree } = require('../src')

test('creates a new instance of BinarySearchTree', () => {
  const bst = new BinarySearchTree()
  expect(bst instanceof BinarySearchTree).toBe(true)
})

test('gets root of binary search tree', () => {
  const bst = new BinarySearchTree()
  bst.insert(1)
  expect(bst.root).toEqual({ key: 1, left: null, right: null })
})

describe('insert', () => {
  test('inserts value at the right place in tree', () => {
    const bst = new BinarySearchTree()
    bst.insert(3)
    bst.insert(1)
    const root = {
      key: 3,
      left: { key: 1, left: null, right: null },
      right: null,
    }
    expect(bst.root).toEqual(root)
  })
})

describe('scoped bst tree', () => {
  let bst
  beforeEach(() => {
    bst = new BinarySearchTree()

    bst.insert(3)
    bst.insert(1)
    bst.insert(0)
    bst.insert(2)
    bst.insert(5)
    bst.insert(4)
    bst.insert(6)
  })

  describe('traversal', () => {
    test('traverses tree in in order and returns array of values', () => {
      const inOrderArr = [0, 1, 2, 3, 4, 5, 6]
      expect(bst.printInOrder()).toEqual(inOrderArr)
    })

    test('traverses tree in pre order and returns array of values', () => {
      const preOrderArr = [3, 1, 0, 2, 5, 4, 6]
      expect(bst.printPreOrder()).toEqual(preOrderArr)
    })

    test('traverses tree in post order and returns array of values', () => {
      const postOrderArr = [0, 2, 1, 4, 6, 5, 3]
      expect(bst.printPostOrder()).toEqual(postOrderArr)
    })

    test('traverses tree in level order and returns array of values', () => {
      const levelOrderArr = [3, 1, 5, 0, 2, 4, 6]
      expect(bst.printLevelOrder()).toEqual(levelOrderArr)
    })
  })

  describe('search', () => {
    test('searches tree and returns the node if the specified value is found', () => {
      const valToSearch = 4,
        foundNode = { key: 4, left: null, right: null }
      expect(bst.search(valToSearch)).toEqual(foundNode)
    })
    test('searches tree and returns null if the specified value is not found', () => {
      const valToSearch = 11,
        foundNode = null
      expect(bst.search(valToSearch)).toEqual(foundNode)
    })
  })

  describe('delete', () => {
    test('searches and deletes the correct node if the specified value is found', () => {
      const valToDelete = 1,
        root = {
          key: 3,
          left: {
            key: 2,
            left: { key: 0, left: null, right: null },
            right: null,
          },
          right: {
            key: 5,
            left: { key: 4, left: null, right: null },
            right: { key: 6, left: null, right: null },
          },
        }
      bst.delete(valToDelete)

      expect(bst.root).toEqual(root)
    })
    test('does not alter the tree if specified value to delete is not found', () => {
      const valToDelete = 11,
        root = {
          key: 3,
          left: {
            key: 1,
            left: { key: 0, left: null, right: null },
            right: { key: 2, left: null, right: null },
          },
          right: {
            key: 5,
            left: { key: 4, left: null, right: null },
            right: { key: 6, left: null, right: null },
          },
        }
      bst.delete(valToDelete)

      expect(bst.root).toEqual(root)
    })
  })
})
