const {insertSort} = require('./insert-sort.js');
const {DoublyLinkedList} = require('../data-structures/doubly-linked-list.js');
const {randomlyShuffleArray} = require('../../utils.js');

test('should sort array', () => {

    // const array = [1, 2, 3, 4, 5];
    // const unsortedArray = randomlyShuffleArray(array);
    // const sortedArray = heapSort(unsortedArray);
    // expect(array).toEqual(sortedArray);

    const dll = new DoublyLinkedList();
    const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    while (pool.length > 0) {
        const index = Math.round(Math.random() * (pool.length - 1 + 1) + (0 - 0.5));
        const val = pool[index];
        pool.splice(index, 1);
        dll.add(val);
    }

    dll.traverse();
    insertSort(dll);
    dll.traverse();
});
