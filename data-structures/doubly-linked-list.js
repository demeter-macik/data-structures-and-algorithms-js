// Doubly linked list implementation

class DoublyLinkedList {

  constructor() {
    this.head;
    this.tail;
  }

  add(value) {
    const element = { value };
    if (this.head === undefined) {
      this.head = element;
      this.tail = element;
    } else {
      this.tail.next = element;
      element.prev = this.tail;
      this.tail = element;
    }
  }

  traverse() {
    let str = `head: ${this.head && this.head.value}; tail: ${this.tail && this.tail.value}; `;
    let element = this.head;
    while (element) {
      str += `[${element.prev && element.prev.value} -> ${element.value} -> ${element.next && element.next.value}]=>`
      element = element.next;
    }
    str = str.substr(0, str.length - 2);
    console.log(str);
  }
}

module.exports = { DoublyLinkedList };