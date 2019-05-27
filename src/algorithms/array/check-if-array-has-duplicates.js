/**
 * Check if array has duplicate values
 */

const uniqueItems = [1, 2, 3, 4, 5];
const duplicateItems = [1, 2, 1, 2, 4];

/**
 * Check for duplicates using Set from ES2016
 * @param {*[]} array array
 * @returns {boolean} boolean
 */
function hasDuplicates(array) {
    const set = new Set(array);
    return set.size !== array.length;
}

console.log(hasDuplicates(uniqueItems));
console.log(hasDuplicates(duplicateItems));

/**
 * Check for duplicates using Object
 * @param {*[]} array array
 * @returns {boolean} boolean
 */
function hasDuplicates2(array) {
    const set = {};
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (set[item] !== undefined) {
            return true;
        }
        set[item] = 1;
    }
    return false;
}
console.log(hasDuplicates2(uniqueItems));
console.log(hasDuplicates2(duplicateItems));
