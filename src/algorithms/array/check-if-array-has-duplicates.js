/**
 * Array with hasDuplicates method
 */
class MyArray extends Array {

  /**
     * Check if array has duplicates
     * @returns {boolean} boolean
     */
  hasDuplicates1() {
    const set = new Set(this);
    return set.size !== this.length;
  }

  /**
     * Check if array has duplicates
     * @returns {*} boolean
     */
  hasDuplicates2() {
    const set = {};
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      if (set[item] !== undefined) {
        return true;
      }
      set[item] = 1;
    }
    return false;
  }
}

module.exports = {MyArray};
