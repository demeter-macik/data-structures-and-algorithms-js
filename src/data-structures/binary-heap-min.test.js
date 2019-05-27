const {BinaryHeapMin} = require('./binary-heap-min.js');

test('binary heap min', () => {
  const heap = new BinaryHeapMin();

  const data = [9, 4, 5, 6, 3, 7, 8, 2, 1];
  while (data.length > 0) {
    heap.push(data.pop());
  }

  expect(heap.peek()).toBe(1);
  expect(heap.pop()).toBe(1);
  expect(heap.peek()).toBe(2);
});
