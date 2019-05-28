const {LinkedList} = require('../data-structures/linked-list.js');

describe('linked list', () => {

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

  test('should return true if list is empty', () => {
    const list = new LinkedList();
    expect(list).toBeTruthy();
  });

  test('should return head value', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.peek()).toBe(1);
    expect(list.head.value).toBe(1);
  });

  test('find', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 'one'});
    list.append({key: 2, value: 'two'});
    list.append({key: 3, value: 'three'});
    const result = list.find(2, (key, value) => {
      return value && value.key === key;
    });
    expect(result.value).toBe('two');
  });

  test('should remove head', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 1});
    list.append({key: 2, value: 2});
    list.append({key: 3, value: 3});
    list.delete(1, (key, value) => {
      return value && value.key === key;
    });
    expect(list.head.value).toStrictEqual({key: 2, value: 2});
    expect(list.head.next.value).toStrictEqual({key: 3, value: 3});
    expect(list.tail.value).toStrictEqual({key: 3, value: 3});
  });

  test('should remove tail', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 1});
    list.append({key: 2, value: 2});
    list.append({key: 3, value: 3});
    list.delete(3, (key, value) => {
      return value && value.key === key;
    });
    expect(list.head.value).toStrictEqual({key: 1, value: 1});
    expect(list.head.next.value).toStrictEqual({key: 2, value: 2});
    expect(list.tail.value).toStrictEqual({key: 2, value: 2});
  });

  test('should remove element', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 1});
    list.append({key: 2, value: 2});
    list.append({key: 3, value: 3});
    list.delete(2, (key, value) => {
      return value && value.key === key;
    });
    expect(list.head.value).toStrictEqual({key: 1, value: 1});
    expect(list.head.next.value).toStrictEqual({key: 3, value: 3});
    expect(list.tail.value).toStrictEqual({key: 3, value: 3});
  });

  test('should remove head', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 1});
    list.delete(1, (key, value) => {
      return value && value.key === key;
    });
    expect(list.head).toBeUndefined();
    expect(list.tail).toBeUndefined();
  });

  test('should remove tail', () => {
    const list = new LinkedList();
    list.append({key: 1, value: 1});
    list.append({key: 2, value: 2});
    list.delete(2, (key, value) => {
      return value && value.key === key;
    });
    expect(list.head.value).toStrictEqual({key: 1, value: 1});
    expect(list.tail.value).toStrictEqual({key: 1, value: 1});
  });

});
