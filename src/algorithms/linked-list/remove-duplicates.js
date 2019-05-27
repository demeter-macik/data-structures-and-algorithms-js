// Remove duplicates in unsorted linked list

const { SinglyLinkedList } = require('../../data-structures/singly-linked-list.js');

class LinkedList extends SinglyLinkedList {

  removeDuplicates() {

    if (this.head === undefined) {
      return;
    }

    let current = this.head;

    while (current.next) {

      let next = current.next;
      let previous;

      while (next) {

        if (current.value === next.value) {
          if (previous !== undefined) {
            previous.next = next.next;
          } else {
            current.next = next.next;
          }
          delete next.next;
        }

        previous = next;
        next = next.next;
      }

      current = current.next;
    }

  }

}

const sll = new LinkedList();

sll.add(2);
sll.add(1);
sll.add(2);

sll.traverse();

sll.removeDuplicates();

sll.traverse();