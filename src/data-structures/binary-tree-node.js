/**
 * Binary tree node
 * @class
 */
class Node {
  /**
   * @param {number} value value
   * @param {Node} parent parent node
   * @property {Node} left - left node
   * @property {Node} right - right node
   * @property {Node} parent - parent node
   */
  constructor(value, parent) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
    this.parent = parent;
  }

  /**
   * @param {number} value1 value 1
   * @param {number} value2 value 2
   * @returns {boolean} boolean
   */
  compare(value1, value2) {
    return value1 < value2;
  }

  /**
   * Add value to node
   * @param {number} value value
   * @returns {Node} node
   */
  add(value) {

    if (this.compare(value, this.value)) {
      if (!this.left) {
        this.left = new Node(value, this);
        return this.left;
      } else {
        return this.left.add(value);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value, this);
        return this.right;
      } else {
        return this.right.add(value);
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
    if (this.compare(value, this.value)) {
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

  /**
   * Returns node as an array
   * @returns {*[]} array
   */
  toArray() {
    const left = this.left && this.left.toArray();
    const right = this.right && this.right.toArray();
    return [this.value, [left, right]];
  }

  /** */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  /** */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

  /** */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  /** */
  get balanceFactor() {
    return this.rightHeight - this.leftHeight;
  }

  /**
   * Set left node
   * @param {Node} node - node
   * @returns {Node} node
   */
  setLeft(node) {

    if (this.left) {
      this.left.parent = undefined;
    }
    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }
    return node;
  }

  /**
   * @param {Node} node - node
   * @returns {Node} node
   */
  setRight(node) {

    if (this.right) {
      this.right.parent = undefined;
    }
    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }
    return node;
  }

}

module.exports = {Node};
