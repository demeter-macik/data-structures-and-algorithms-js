// Calculate sum of two linked list
// Example: 5>2>3 + 6>2>4 = 1147

const { SinglyLinkedList } = require('../data-structures/singly-linked-list.js');
const { Stack } = require('../data-structures/stack.js');

function calcLinkedListSize(linkedList) {
  let size = 0;
  let current = linkedList.head;
  while (current) {
    size++;
    current = current.next;
  }
  return size;
}

function calcSum(linkedList1, linkedList2) {

  const size1 = calcLinkedListSize(linkedList1);
  const size2 = calcLinkedListSize(linkedList2);

  const diff = size1 - size2;

  let current1 = linkedList1.head;
  let current2 = linkedList2.head;

  const stack = new Stack();

  // skip first N numbers if lists has diferrent sizes
  if (diff > 0) {
    let counter = 0;
    while (counter < diff) {
      stack.push(current1.value);
      current1 = current1.next;
      counter++;
    }
  } else if (diff < 0) {
    let counter = 0;
    while (counter < diff) {
      stack.push(current2.value);
      current2 = current2.next;
      counter++;
    }
  }

  while (current1) {
    stack.push(current1.value + current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }

  // construct number
  let sum = 0;
  let index = 0;
  while (!stack.empty()) {
    const num = stack.pop();
    sum += num * Math.pow(10, index++);
  }

  return sum;
}

const ll1 = new SinglyLinkedList();
const ll2 = new SinglyLinkedList();

ll1.add(5);
ll1.add(2);
ll1.add(3);

ll2.add(6);
ll2.add(2);
ll2.add(4);

// 523 + 624
console.log('sum:', calcSum(ll1, ll2));


ll1.add(1);

// 5231 + 624
console.log('sum:', calcSum(ll1, ll2));

