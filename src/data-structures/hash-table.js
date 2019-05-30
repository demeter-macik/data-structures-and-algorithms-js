const {LinkedList} = require('./linked-list.js');

/**
 * Hash table implementation
 */
class HashTable {

  /**
   * @param {number} size - size of hash table
   */
  constructor(size = 16) {
    this.size = size;
    this.table = Array(size).fill(null).map(() => new LinkedList());
  }

  /**
   * Hash key
   * @param {string} key - key
   * @returns {number} hash
   */
  hash(key) {

    if (typeof key !== 'string') {
      throw new Error('Key must be a string');
    }

    return key.split('').reduce((acc, value) => {
      return acc += value.charCodeAt(0);
    }, 0) % this.size;
  }

  /**
   * Add value
   * @param {string} key - key
   * @param {*} value - value
   */
  add(key, value) {
    const hash = this.hash(key);
    const list = this.table[hash];
    const element = list.find(key, (key, value) => {
      return value && value.key === key;
    });
    if (!element) {
      // add new value
      list.append({key, value});
    } else {
      // update existing value
      element.value = value;
    }
  }

  /**
   * Delete value
   * @param {string} key - key
   * @returns {*} value
   */
  delete(key) {
    const hash = this.hash(key);
    const list = this.table[hash];
    return list.delete(key, (key, value) => {
      return value && value.key === key;
    });
  }

  /**
   * Returns  value
   * @param {string} key - key
   * @returns {*} value
   */
  get(key) {
    const hash = this.hash(key);
    const list = this.table[hash];
    const item = list.find(key, (key, value) => {
      return value && value.key === key;
    });
    return item && item.value;
  }

  /**
   * Check if hashTable has key
   * @param {string} key - key
   * @returns {boolean} boolean
   */
  has(key) {
    const hash = this.hash(key);
    const list = this.table[hash];
    const value = list.find(key, (key, value) => {
      return value && value.key === key;
    });
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns keys
   * @returns {string[]} keys - array of keys
   */
  getKeys() {
    return this.table.reduce((acc, list) => {
      return acc.concat(list.toArray().map((item) => item.key));
    }, []);
  }
}

module.exports = {HashTable};


