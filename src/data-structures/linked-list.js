/* eslint-disable no-console */
/**
 * Linked list implementation
 * delete Time O(1)
 * get Time O(N)
 * search Time O(N)
 * Space O(N)
 */
class LinkedList {

  /**
   * Add to the tail of linked list
   * Time O(1)
   * @param {object} value - value to store
   */
  append(value) {

    const element = {value};

    if (this.head === undefined) {
      this.head = element;
      this.tail = element;
    } else {
      this.tail.next = element;
      this.tail = element;
    }
  }

  /**
   * Add to the head of linked list
   * Time O(1)
   * @param {object} value - value to store
   */
  prepend(value) {

    const element = {value};

    if (this.head === undefined) {
      this.head = element;
      this.tail = element;
    } else {
      element.next = this.head;
      this.head = element;
    }
  }

  /**
   * Delete element from tail
   * @returns {*} deleted value
   */
  deleteTail() {
    let previous;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    if (!previous) {
      delete this.head;
      delete this.tail;
    } else {
      this.tail = previous;
      delete previous.next;
    }
    return current.value;
  }

  /**
   * Delete element from head
   * @returns {*} deleted value
   */
  deleteHead() {
    const deleted = this.head;
    if (this.head) {
      if (this.tail === this.head) {
        delete this.head;
        delete this.tail;
      } else {
        this.head = this.head.next;
      }
    }
    return deleted.value;
  }

  /**
   * Reverse a linked list
   * Time O(N)
   */
  reverse() {

    let first = this.head;
    let current = first.next;

    while (current) {

      const last = current.next;
      // swap elements
      current.next = first;
      first.next = current;

      // update head
      this.head = first;

      // move forward
      first = current;
      current = last;
    }
    // update tail
    this.tail = first;
  }

  /**
   * Print all elements to console
   */
  traverse() {
    let element = this.head;
    while (element) {
      console.log(element.value);
      element = element.next;
    }
  }

  /**
   * Returns array of values
   * @returns {object[]} array
   */
  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  /**
   * Returns string of values
   * @returns {string} string
   */
  toString() {
    return this.toArray().join(', ');
  }

  /**
   * Check if linked list is empty
   * @returns {boolean} boolean
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Return head value
   * Time O(1)
   * @returns {*} value
   */
  peek() {
    return this.head && this.head.value;
  }

  /**
   * Compare keys callback
   * @callback compareCallback
   * @param {*} key - key
   * @param {*} value - value
   * @returns {*} value
   */

  /**
   * Find element
   * Time O(N)
   * @param {*} key key
   * @param {compareCallback} compareCallback compare callback
   * @returns {*} value
   */
  find(key, compareCallback) {
    let current = this.head;
    while (current) {
      if (compareCallback(key, current.value)) {
        return current.value;
      }
      current = current.next;
    }
  }

  /**
   * Delete element
   * Time O(1) ???
   * @param {*} key key
   * @param {compareCallback} compareCallback compare callback
   * @returns {*} value
   */
  delete(key, compareCallback) {
    let current = this.head;
    let previous;
    while (current) {
      if (compareCallback(key, current.value)) {
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = previous;
          if (previous) {
            delete previous.next;
          }
        }
        if (previous) {
          previous.next = current.next;
        }
        return current.value;
      }
      previous = current;
      current = current.next;
    }
  }

}

module.exports = {LinkedList};
