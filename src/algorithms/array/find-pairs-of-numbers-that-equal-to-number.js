// Find pairs of numbers sum of which are equal to number.

// Additional questions:
// Does array contains only positive or negative numbers?
// What if the same pair repeats twice, should we print it every time?
// Is reverse of pair is acceptable e.g. can we print both (4,1) and (1,4)?
// Do we need to print only distinct pair?

const array = [1, 2, 3, 4, 5];
const num = 5;

// O(N^2)
function findPairs1(array, num) {
  const pairs = [];
  for (let i = 0; i < array.length; i++) {
    const first = array[i];
    for (let j = 0; j < array.length; j++) {
      const second = array[j];
      if ((first + second) === num) {
        pairs.push([first, second]);
      }
    }
  }
  return pairs;
}
console.log(findPairs1(array, num));

// O(N) plus require space to store set.
function findPairs2(array, num) {
  const pairs = [];
  const set = new Set(array);
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const diff = num - item;

    if (set.has(diff)) {
      pairs.push([item, diff]);
    }
  }
  return pairs;
}

console.log(findPairs2(array, num));

// O(NlogN) if we assume that Array.prototype uses QuickSort O(logN)
function findPairs3(array, num) {

  const sorted = array.sort();

  let left = 0;
  let right = array.length - 1;

  const pairs = [];
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === num) {
      pairs.push([sorted[left], sorted[right]]);
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
}

console.log(findPairs3(array, num));
