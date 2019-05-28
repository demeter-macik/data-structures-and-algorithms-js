/**
 * Heap sorting implementation
 */

const {BinaryHeapMin} = require('../../data-structures/binary-heap-min.js');

/**
 * Sort array of numbers
 * @param {number[]} array array
 * @returns {number[]} sorted array
 */
function heapSort(array) {

  const heap = new BinaryHeapMin();

  array.forEach((item) => {
    heap.push(item);
  });

  const sorted = [];

  let item = heap.pop();
  while (item !== undefined) {
    sorted.push(item);
    item = heap.pop();
  }

  return sorted;
}

module.exports = {heapSort};


