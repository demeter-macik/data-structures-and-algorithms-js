/* eslint-disable no-console */
/**
 * Doubly linked list implementation
 * delete Time O(1)
 * get Time O(N)
 * search Time O(N)
 * Space O(N)
 */
class DoublyLinkedList {

  /** */
  constructor() {
    this.head;
    this.tail;
  }

  /**
   * Add value
   * Time O(1)
   * @param {*} value value
   */
  add(value) {
    const element = {value};
    if (this.head === undefined) {
      this.head = element;
      this.tail = element;
    } else {
      this.tail.next = element;
      element.prev = this.tail;
      this.tail = element;
    }
  }

  /**
   * Traverse list
   */
  traverse() {
    const headValue = this.head && this.head.value;
    const tailValue = this.tail && this.tail.value;
    let str = `head: ${headValue}; tail: ${tailValue}; `;
    let element = this.head;
    while (element) {
      const prevValue = element.prev && element.prev.value;
      const nextValue = element.next && element.next.value;
      str += `[${prevValue} -> ${element.value} -> ${nextValue}]=>`;
      element = element.next;
    }
    str = str.substr(0, str.length - 2);
    console.log(str);
  }
}

module.exports = {DoublyLinkedList};
