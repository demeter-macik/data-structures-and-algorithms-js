/**
 * Bogosort implementation
 * O(N!)
 */

const {randomlyShuffle} = require('../../utils.js');

/**
 * Check if array sorted
 * @param {number[]} array - array
 * @returns {boolean} boolean
 */
function checkIfSorted(array) {
    for (let i = 1; i < array.length; i++) {
        const prev = array[i - 1];
        const curr = array[i];
        if (prev > curr) {
            return false;
        }
    }
    return true;
}

let array = [1, 2, 3, 4, 5];
console.log(array, checkIfSorted(array));

let count = 1;
for (let i = 0; i < 10000; i++) {
    array = randomlyShuffle(array);
    const sorted = checkIfSorted(array);
    console.log(array, sorted);
    if (sorted === true) {
        console.log('iteration', count);
        break;
    }
    count++;
}z
