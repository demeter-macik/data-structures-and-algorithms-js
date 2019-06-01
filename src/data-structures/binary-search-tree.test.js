const {BinarySearchTree, comparator} = require('./binary-search-tree.js');

describe('Binary search tree', () => {

  test('should add item', () => {
    const tree = new BinarySearchTree(comparator);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.root.value).toBe(1);
    expect(tree.root.left.value).toBe(2);
  });

  test('should check if tree has a number', () => {
    const tree = new BinarySearchTree(comparator);
    tree.add(8);
    tree.add(3);
    tree.add(12);
    expect(tree.has(12)).toBeTruthy();
    expect(tree.has(6)).toBeFalsy();
    expect(tree.has(4)).toBeFalsy();
  });

});
