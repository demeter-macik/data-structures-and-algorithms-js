/**
 * Return random index
 * @param {number} start - start from
 * @param {number} end - to
 * @returns {number} random number
 */
function randomIndex(start, end) {
    return Math.round(Math.random() * (end + 1) + (start - 0.5));
}

/**
 * Returns randomly sorted array
 * @param {number[]} array - array of numbers
 * @returns {number[]} randomly sorted array
 */
function randomlyShuffleArray(array) {
    const copy = Array.from(array);
    const sorted = [];
    while (copy.length > 0) {
        const index = randomIndex(0, copy.length - 1);
        const value = copy.splice(index, 1)[0];
        sorted.push(value);
    }
    return sorted;
}

module.exports = {
    randomIndex,
    randomlyShuffleArray,
};
