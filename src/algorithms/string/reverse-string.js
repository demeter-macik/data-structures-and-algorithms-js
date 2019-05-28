/**
 * Reverse string implementation
 */
class ReverseString extends String {

  /**
   * Reverse string
   * @param {string} string string
   * @returns {string} string
   */
  static reverse1(string) {
    return Array.from(string).reverse().join('');
  }

  /**
   * Reverse string
   * @param {string} string string
   * @returns {string} string
   */
  static reverse2(string) {
    if (string.length === 1) {
      return string;
    }
    return this.reverse2(string.slice(1, string.length)) + string[0];
  }

}

module.exports = {ReverseString};
