const {Node} = require('./binary-tree-node.js');

/** */
class BinarySearchTree {

  /**
   * Add value to the tree
   * Time O(logN)
   * @param {number} value value
   * @returns {Node} node
   */
  add(value) {
    if (!this.root) {
      this.root = new Node(value, undefined);
      return this.root;
    } else {
      return this.root.add(value);
    }
  }

  /**
   * Find if tree has value
   * Time O(logN)
   * @param {number} value - value
   * @returns {boolean} boolean
   */
  has(value) {
    if (!this.root) {
      return false;
    }
    return this.root.has(value);
  }

  /**
   * Returns tree as array
   * Time O(logN)
   * @returns {*[]} array array
   */
  toArray() {
    return this.root && this.root.toArray() || [];
  }

  /**
   * Returns string
   * @returns {string} string
   */
  toString() {
    return this.root && this.root.toString() || '';
  }

  /**
   * Find Node by value
   * Time O(logN)
   * @param {number} value value
   * returns {Node} node
   */
  find(value) {
    throw new Error('not implemented!');
  }

  /**
   * Delete node from tree
   * Time O(logN)
   * To implement deletion it needs to add parent link into Node and
   * find method that returns Nodes by value.
   * @param {Node} node node
   */
  delete(node) {
    throw new Error('not implemented!');
  }

}

module.exports = {BinarySearchTree};
