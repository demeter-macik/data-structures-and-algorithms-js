const {heapSort} = require('./heap-sort.js');
const {randomlyShuffleArray} = require('../../utils.js');

test('should sort array', () => {
  const array = [1, 2, 3, 4, 5];
  const unsortedArray = randomlyShuffleArray(array);
  const sortedArray = heapSort(unsortedArray);
  expect(array).toEqual(sortedArray);
});
