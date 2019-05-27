/* eslint-disable no-console */
/**
 * Binary heap min implementation
 * Zero based array
 * height of heap is log N
 * peek min O(1)
 * pop min  O(log N)
 * push     O(log N)
 */
class BinaryHeapMin {

  /**
   * Constructor
   */
  constructor() {
    this.heap = [];
  }

  /**
   * Returns size of heap
   * @returns {number} size
   */
  getSize() {
    return this.heap.length;
  }

  /**
   * Swap values in heap
   * @param {number} index1 first index
   * @param {number} index2 second index
   */
  swap(index1, index2) {
    const value = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = value;
  }

  /**
   * Returns index of parent node
   * @param {number} index index of current node
   * @returns {number} parent index
   */
  getParent(index) {
    if (!this.checkIndex(index)) {
      return;
    }
    return Math.floor(index / 2);
  }

  /**
   * Returns index of left node
   * @param {number} index index of current node
   * @returns {number} left index
   */
  getLeftIndex(index) {
    if (!this.checkIndex(index)) {
      return;
    }
    const leftIndex = index * 2 + 1;
    if (leftIndex >= this.heap.length) {
      return;
    }
    return leftIndex;
  }

  /**
   * Returns index of right node
   * @param {number} index index of current node
   * @returns {number} right index
   */
  getRightIndex(index) {
    if (!this.checkIndex(index)) {
      return;
    }
    const rightIndex = index * 2 + 2;
    if (rightIndex >= this.heap.length) {
      return;
    }
    return rightIndex;
  }

  /**
   * Adds value to the heap
   * @param {number} value value
   */
  push(value) {
    if (typeof value !== 'number') {
      throw new Error('Heap supports only numeric values');
    }
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }

  /**
   * Returns and removes min value from heap
   * @returns {number} value
   */
  pop() {
    const min = this.heap[0];
    const item = this.heap.pop();
    if (this.heap.length >= 1) {
      this.heap[0] = item;
      this.down(0);
    }
    return min;
  }

  /**
   * Return min value from heap
   * @returns {number} value
   */
  peek() {
    return this.heap[0];
  }

  /**
   * Returns value by index
   * @param {number} index - index of node
   * @returns {number} value
   */
  get(index) {
    return this.heap[index];
  }

  /**
   * Compare nodes
   * @param {number} index1 first index
   * @param {number} index2 second index
   * @returns {boolean} boolean
   */
  compare(index1, index2) {
    return this.get(index1) < this.get(index2);
  }

  /**
   * Move node up
   * @param {number} index index of node
   */
  up(index) {
    let parentIndex = this.getParent(index);
    while (this.compare(index, parentIndex)) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParent(index);
    }
  }

  /**
   * Move node down
   * @param {number} index index of node
   */
  down(index) {

    if (index >= this.heap.length) {
      return;
    }

    if (!this.checkIndex(index)) {
      return;
    }

    let currentIndex = index;
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    let childIndex;
    if (leftIndex && rightIndex) {
      const leftValue = this.get(leftIndex);
      const rightValue = this.get(rightIndex);
      childIndex = leftValue < rightValue ? leftIndex : rightIndex;
    } else {
      childIndex = leftIndex || rightIndex;
    }

    if (this.compare(childIndex, index)) {
      currentIndex = childIndex;
    }

    if (currentIndex !== index) {
      this.swap(index, currentIndex);
      this.down(currentIndex);
    }
  }

  /**
   * Traverse heap
   */
  traverse() {
    this.traverseNode(0);
  }

  /**
   * Traverse node
   * @param {number} index - index of node
   */
  traverseNode(index) {
    if (!this.checkIndex(index)) {
      return;
    }
    const currentIndex = index;
    const leftIndex = this.getLeftIndex(currentIndex);
    const rightIndex = this.getRightIndex(currentIndex);
    const leftValue = this.get(leftIndex) || '-';
    const currentValue = this.get(currentIndex);
    const rightValue = this.get(rightIndex) || '-';
    console.log(`${leftValue} <- ${currentValue} -> ${rightValue}`);
    this.traverseNode(leftIndex);
    this.traverseNode(rightIndex);
  }

  /**
   * Check if index is valid
   * @param {number} index index of node
   * @returns {boolean} returns true if index is valid
   */
  checkIndex(index) {
    if (typeof index !== 'number') {
      return false;
    }
    if (index < 0) {
      return false;
    }
    return true;
  }

}

module.exports = {BinaryHeapMin};
