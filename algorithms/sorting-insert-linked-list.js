// Insertion sorting algorithm for doubly linked list implementation

const { DoublyLinkedList } = require('../data-structures/doubly-linked-list.js');

function sort(linkedList) {

  let current = linkedList.head.next;

  while (current) {

    const currentPrev = current.prev;
    const currentNext = current.next;

    let target = current.prev;

    while (target) {

      if (target.value > current.value && (target.prev && target.prev.value < current.value || !target.prev)) {

        const targetPrev = target.prev;

        // check if target is a head
        if (!target.prev) {
          linkedList.head = current;
        }

        // check if current is a tail
        if (!current.next) {
          linkedList.tail = currentPrev;
        }

        currentPrev.next = currentNext;
        if (currentNext) {
          currentNext.prev = currentPrev;
        }
        if (targetPrev) {
          targetPrev.next = current;
        }
        current.prev = targetPrev;
        current.next = target;
        target.prev = current;
        break;
      }

      // move to prevous element
      target = target.prev;
    }

    // move to next element
    current = currentNext;
  }
}

const dll = new DoublyLinkedList();
const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (pool.length > 0) {
  const index = Math.round(Math.random() * (pool.length - 1 + 1) + (0 - 0.5));
  const val = pool[index];
  pool.splice(index, 1);
  dll.add(val);
}

dll.traverse();
sort(dll);
dll.traverse();