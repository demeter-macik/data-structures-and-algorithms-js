const {HashTable} = require('./hash-table.js');

describe('Hash Table', () => {

  test('should create hash', () => {
    const hashTable = new HashTable();
    expect(hashTable.hash('abc')).toBe(6);
  });

  test('should create hash', () => {
    const hashTable = new HashTable(32);
    expect(hashTable.hash('abcd')).toBe(10);
  });

  test('should add value', () => {
    const hashTable = new HashTable();
    hashTable.add('abc', [1]);
    const hash = hashTable.hash('abc');
    const list = hashTable.table[hash];
    expect(list.head.value).toStrictEqual({key: 'abc', value: [1]});
  });

  test('should delete value', () => {
    const hashTable = new HashTable();
    hashTable.add('abc', [1]);
    const hash = hashTable.hash('abc');
    const list = hashTable.table[hash];
    expect(list.head.value).toStrictEqual({key: 'abc', value: [1]});
    hashTable.delete('abc');
    expect(list.head).toBeUndefined();
  });

  test('should return value', () => {
    const hashTable = new HashTable();
    hashTable.add('abc', [1]);
    hashTable.add('dfe', [2]);
    hashTable.add('tre', [3]);
    const value = hashTable.get('dfe');
    expect(value).toStrictEqual([2]);
  });

  test('should check if hash table has a value', () => {
    const hashTable = new HashTable();
    hashTable.add('abc', [1]);
    hashTable.add('dfe', [2]);
    hashTable.add('tre', [3]);
    expect(hashTable.has('dfe')).toBeTruthy();
    expect(hashTable.has('sss')).toBeFalsy();
  });

});
