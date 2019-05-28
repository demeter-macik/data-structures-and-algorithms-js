const {ReverseString} = require('./reverse-string.js');

describe('reverse string', () => {

  test('should reverse string', () => {
    const reversed = ReverseString.reverse1('abc');
    expect(reversed).toBe('cba');

  });

  test('should reverse string', () => {
    const reversed = ReverseString.reverse2('abc');
    expect(reversed).toBe('cba');
  });

});
