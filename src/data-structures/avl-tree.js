const {BinarySearchTree} = require('./binary-search-tree.js');

/**
 *  AVL (Adelson-Velsky and Landis) implementation
 * @extends Node
 */
class AVLTree extends BinarySearchTree {

  /**
   * @override
   * @param {number} value value
   * @returns {Node} node
   */
  add(value) {
    const node = super.add(value);
    let current = node;
    while (current) {
      this.balance(current);
      current = current.parent;
    }
    return node;
  }

  /**
   * @param {Node} node node
   */
  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.right.balanceFactor > 0) {
        this.leftLeft(node);
      } else if (node.right.balanceFactor < 0) {
        this.rightLeft(node);
      }
    } else if (node.balanceFactor < -1) {
      if (node.left.balanceFactor > 0) {
        this.rightRight(node);
      } else if (node.left.balanceFactor < 0) {
        this.leftRight(node);
      }
    }
  }

  /**
   * @param {Node} node node
   */
  leftLeft(node) {
    const newNode = node.right;
    const parent = node.parent;
    newNode.setLeft(node);
    node.setRight(undefined);
    if (parent) {
      if (parent.left === node) {
        parent.setLeft(newNode);
      } else if (parent.right === node) {
        parent.setRight(newNode);
      }
    } else {
      this.root = newNode;
    }
  }

  /**
   * @param {Node} node node
   */
  rightRight(node) {
    throw new Error('not implemented');
  }

  /**
   * @param {Node} node node
   */
  leftRight(node) {
    throw new Error('not implemented');
  }

  /**
   * @param {Node} node node
   */
  rightLeft(node) {
    throw new Error('not implemented');
  }

}

module.exports = {AVLTree};
