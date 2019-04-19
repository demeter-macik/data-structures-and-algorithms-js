// Find circle in the linked list

const { SinglyLinkedList } = require('../data-structures/singly-linked-list.js');

function findCircle(linkedList) {
  let first = linkedList.head;
  const second = linkedList.head;
  while (first.next) {
    first = first.next;
    if (first === second) {
      return true;
    }
  }
  return false;
}

const sll = new SinglyLinkedList();

sll.add(1);
sll.add(2);
sll.add(3);
console.log('has circle loop:', findCircle(sll));

// make circle
sll.tail.next = sll.head;
console.log('has circle loop:', findCircle(sll));