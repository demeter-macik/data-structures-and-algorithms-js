const {AVLTree} = require('./avl-tree.js');

describe('AVL tree', () => {

  test('should rotate left left', () => {
    const tree = new AVLTree();
    tree.add(1);
    console.log(JSON.stringify(tree.toArray()));
    tree.add(2);
    expect(tree.toArray()).toStrictEqual([1, [undefined, [2, [undefined, undefined]]]]);
    tree.add(3);
    expect(tree.toArray()).toStrictEqual([2, [[1, [undefined, undefined]], [3, [undefined, undefined]]]]);
    tree.add(4);
    expect(tree.toArray()).toStrictEqual([2, [[1, [undefined, undefined]], [3, [undefined, [4, [undefined, undefined]]]]]]);
  });

});
