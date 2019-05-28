const {LinkedList} = require('./linked-list.js');

/**
 * Queue implementation
 */
class Queue {

  /**
   *
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * Get first item from queue
   * @returns {*} value
   */
  peek() {
    return this.list.peek();
  }

  /**
   * Enqueue to queue
   * @param {*} value value
   */
  enqueue(value) {
    this.list.append(value);
  }

  /**
   * Dequeue from queue
   * @returns {*} value
   */
  dequeue() {
    return this.list.deleteHead();
  }

  /**
   * Check if queue is empty
   * @returns {boolean} boolean
   */
  isEmpty() {
    return this.list.isEmpty();
  }

}

module.exports = {Queue};
