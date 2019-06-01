/**
 * Binary tree node
 */
class Node {
  /**
   * @param {number} value value
   * @param {function} comparator function that compares values
   * @property {Node} left - left node
   * @property {Node} right - right node
   */
  constructor(value, comparator) {
    this.value = value;
    this.comparator = comparator;
    this.left = undefined;
    this.right = undefined;
  }

  /**
   * Add value to node
   * @param {number} value value
   */
  add(value) {

    if (this.comparator(value, this.value)) {
      if (!this.left) {
        this.left = new Node(value, this.comparator);
      } else {
        this.left.add(value);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value, this.comparator);
      } else {
        this.right.add(value);
      }
    }
  }

  /**
   * Find if node has value
   * @param {number} value value
   * @returns {boolean} boolean
   */
  has(value) {
    if (this.value === value) {
      return true;
    }
    if (this.comparator(value, this.value)) {
      if (this.left) {
        return this.left.has(value);
      }
      return false;
    } else {
      if (this.right) {
        return this.right.has(value);
      }
      return false;
    }
  }

}

/**
 * Compare two values
 * @param {number} newValue - first value
 * @param {number} leftNodeValue - second value
 * @returns {boolean} boolean
 */
function comparator(newValue, leftNodeValue) {
  return newValue > leftNodeValue;
}

/** */
class BinarySearchTree {

  /**
   * @param {function} comparator function that compares values
   */
  constructor(comparator) {
    this.comparator = comparator;
  }

  /**
   * Add value to the tree
   * @param {number} value value
   */
  add(value) {
    if (!this.root) {
      this.root = new Node(value, this.comparator);
    } else {
      this.root.add(value);
    }
  }

  /**
   * Find if tree has value
   * @param {number} value - value
   * @returns {boolean} boolean
   */
  has(value) {
    if (!this.root) {
      return false;
    }
    return this.root.has(value);
  }

  // nodeHas

}

module.exports = {Node, BinarySearchTree, comparator};
