const {Node} = require('./binary-tree-node.js');

describe('Binary tree node', () => {

  test('should return height', () => {
    const node1 = new Node(1, undefined);
    const node2 = node1.add(2);
    const node3 = node1.add(3);
    expect(node1.height).toBe(2);
    expect(node2.height).toBe(1);
    expect(node3.height).toBe(0);
  });

  test('should return height', () => {
    const node1 = new Node(3, undefined);
    const node2 = node1.add(2);
    const node3 = node1.add(1);
    expect(node1.height).toBe(2);
    expect(node2.height).toBe(1);
    expect(node3.height).toBe(0);
  });

  test('should return balance factor', () => {
    const node1 = new Node(1, undefined);
    const node2 = node1.add(2);
    const node3 = node1.add(3);
    expect(node1.balanceFactor).toBe(2);
    expect(node2.balanceFactor).toBe(1);
    expect(node3.balanceFactor).toBe(0);
  });

  test('should return balance factor', () => {
    const node1 = new Node(1, undefined);
    const node2 = node1.add(3);
    const node3 = node1.add(2);
    expect(node1.balanceFactor).toBe(2);
    expect(node2.balanceFactor).toBe(-1);
    expect(node3.balanceFactor).toBe(0);
  });

  test('should return balance factor', () => {
    const node1 = new Node(3, undefined);
    const node2 = node1.add(2);
    const node3 = node1.add(1);
    expect(node1.balanceFactor).toBe(-2);
    expect(node2.balanceFactor).toBe(-1);
    expect(node3.balanceFactor).toBe(0);
  });

  test('should return balance factor', () => {
    const node1 = new Node(3, undefined);
    const node2 = node1.add(1);
    const node3 = node1.add(2);
    expect(node1.balanceFactor).toBe(-2);
    expect(node2.balanceFactor).toBe(1);
    expect(node3.balanceFactor).toBe(0);
  });

});

