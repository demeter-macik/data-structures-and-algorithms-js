const {BinarySearchTree} = require('./binary-search-tree.js');

describe('Binary search tree', () => {

  test('should add less smaller to left', () => {
    const tree = new BinarySearchTree();
    tree.add(8);
    expect(tree.toArray()).toStrictEqual([8, [undefined, undefined]]);
    tree.add(1);
    expect(tree.toArray()).toStrictEqual([8, [[1, [undefined, undefined]], undefined]]);
    tree.add(5);
    expect(tree.toArray()).toStrictEqual([8, [[1, [undefined, [5, [undefined, undefined]]]], undefined]]);
    tree.add(12);
    expect(tree.toArray()).toStrictEqual([8, [[1, [undefined, [5, [undefined, undefined]]]], [12, [undefined, undefined]]]]);
  });

  test('should check if tree has a number', () => {
    const tree = new BinarySearchTree();
    tree.add(8);
    tree.add(3);
    tree.add(12);
    expect(tree.has(12)).toBeTruthy();
    expect(tree.has(6)).toBeFalsy();
    expect(tree.has(4)).toBeFalsy();
  });

});
