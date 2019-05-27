// Find middle element of linked list

const { SinglyLinkedList } = require('../../data-structures/singly-linked-list.js');

function findMiddleElement(linkedList) {

  let count = 0;
  let element = linkedList.head;
  let middle = linkedList.head;

  while (element && element.next) {
    element = element.next;
    if (count % 2 === 0) {
      middle = middle.next;
    }
    count++;
  }

  return middle.value;
}

const linkedList = new SinglyLinkedList();

for (let i = 0; i < 15; i++) {
  linkedList.add(i);
}

linkedList.traverse();
console.log('middle', findMiddleElement(linkedList));