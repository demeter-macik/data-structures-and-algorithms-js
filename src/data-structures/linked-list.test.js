const {LinkedList} = require('../data-structures/linked-list.js');

test('should create empty list', () => {
  const list = new LinkedList();
  expect(list.head).toBeUndefined();
  expect(list.tail).toBeUndefined();
});

test('should append value to list', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  expect(list.head.value).toBe(1);
  expect(list.tail.value).toBe(2);
});

test('should prepend value to empty list', () => {
  const list = new LinkedList();
  list.prepend(1);
  expect(list.head.value).toBe(1);
  expect(list.tail.value).toBe(1);
});

test('should prepend value to list', () => {
  const list = new LinkedList();
  list.append(1);
  list.prepend(2);
  expect(list.head.value).toBe(2);
  expect(list.tail.value).toBe(1);
});

test('should store values in order', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.head.value).toBe(1);
  expect(list.head.next.next.value).toBe(3);
  expect(list.tail.value).toBe(3);
});

test('should return array', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const array = list.toArray();
  expect(array).toEqual([1, 2, 3]);
});

test('should return string', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const string = list.toString();
  expect(string).toEqual('1, 2, 3');
});

test('should delete head', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  const deleted = list.deleteHead();
  expect(deleted).toBe(1);
  expect(list.head.value).toBe(2);
});

test('should delete head in list with one element', () => {
  const list = new LinkedList();
  list.append(1);
  const deleted = list.deleteHead();
  expect(deleted).toBe(1);
  expect(list.head).toBeUndefined();
  expect(list.tail).toBeUndefined();
});

test('should delete tail', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  const deleted = list.deleteTail();
  expect(deleted).toBe(2);
  expect(list.head.value).toBe(1);
});

test('should delete tail in list with one element', () => {
  const list = new LinkedList();
  list.append(1);
  const deleted = list.deleteTail();
  expect(deleted).toBe(1);
  expect(list.head).toBeUndefined();
  expect(list.tail).toBeUndefined();
});


