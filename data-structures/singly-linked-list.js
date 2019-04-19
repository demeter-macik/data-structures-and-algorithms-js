// Singly linked list implementation

class SinglyLinkedList {

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
      this.tail = element;
    }
  }

  traverse() {
    let element = this.head;
    while (element) {
      console.log(element.value);
      element = element.next;
    }
  }

  reverse() {
    let current = this.head;
    let next = current.next;       
    delete current.next;

    while (next) {
        let last = next.next;
        next.next = current;
        current = next;
        next = last;           
        this.head = current;
    }
}
}

module.exports = { SinglyLinkedList };
