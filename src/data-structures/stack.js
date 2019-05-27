/**
 * Stack implementation
 */
class Stack {

  /**
   * @param {*[]} items items
   */
  constructor(items) {
    this.count = 0;
    this.storage = {};
    if (Array.isArray(items)) {
      items.forEach((item) => {
        this.push(item);
      });
    }
  }

  /**
   * Push new item
   * @param {*} item item
   */
  push(item) {
    this.storage[this.count] = item;
    this.count++;
  }

  /**
   * Pop
   * @returns {*} item
   */
  pop() {

    if (this.empty()) {
      throw new Error('Stack is Empty');
    }

    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  /**
   * Peek item
   * @returns {*} item
   * @throws Error
   */
  peek() {
    if (this.empty()) {
      throw new Error('Stack is Empty');
    }
    return this.storage[this.count - 1];
  }

  /**
   * Returns size of list
   * @returns {number} size
   */
  size() {
    return this.count;
  }

  /**
   * Check if stack is empty
   * @returns {boolean} boolean
   */
  empty() {
    return this.count === 0;
  }

  /**
   * Remove all elements
   */
  removeAll() {
    this.count = 0;
    this.storage = {};
  }

  /**
   * Clone stack
   * @returns {Stack} stack
   */
  clone() {
    return new Stack(Object.values(this.storage));
  }

}

module.exports = {Stack};
