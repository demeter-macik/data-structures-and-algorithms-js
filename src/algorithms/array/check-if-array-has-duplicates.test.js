const {MyArray} = require('./check-if-array-has-duplicates.js');

describe('check if array has duplicates', () => {

  test('should return false is array has only unique values', () => {
    const myArray = MyArray.from([4, 3, 1, 2, 5]);
    expect(myArray.hasDuplicates1()).toBeFalsy();
    expect(myArray.hasDuplicates2()).toBeFalsy();
  });

  test('should return false is array has duplicate values', () => {
    const myArray = MyArray.from([4, 5, 2, 1, 2]);
    expect(myArray.hasDuplicates1()).toBeTruthy();
    expect(myArray.hasDuplicates2()).toBeTruthy();
  });

});
