const {HashTable} = require('./hash-table.js');

/**
 * Trie node
 */
class Node {

  /**
   * Constructor
   * @param {string} character - character
   * @param {boolean} wordEnd - flag indicates if this character is 
   * the end of the word
   */
  constructor(character, wordEnd = false) {
    this.character = character;
    this.wordEnd = wordEnd;
    this.nodes = new HashTable();
  }

  /**
   * Add child node
   * @param {Node} node - node
   */
  addNode(node) {
    this.nodes.add(node.character, node);
  }

  /**
   * Check if node has character
   * @param {string} character - character
   * @returns {boolean} true is hash character
   */
  has(character) {
    return this.nodes.has(character);
  }

  /**
   * Returns node by character
   * @param {string} character - character
   * @returns {Node} node or undefined if character wasn't found
   */
  get(character) {
    return this.nodes.get(character);
  }

  /**
   * Returns all node's characters
   * @returns {string[]} characters
   */
  getCharacters() {
    return this.nodes.getKeys();
  }
}

/**
 * Trie implementation.
 * Position of the node in the tree defines the key.
 */
class Trie {

  /**
   * Add word
   * O(n) - n is the length of the word
   * @param {string} word - word
   * @throws {Error} `word` should be string
   */
  addWord(word) {

    if (typeof word !== 'string') {
      throw new Error('`word` should be string');
    }

    const characters = word.split('');
    this.addCharactersToNode(characters);
  }

  /**
   * Add array of characters to the node
   * @private
   * @param {string[]} characters - array of characters
   * @param {Node} node - node
   * @throws {Error} `characters` should be array
   */
  addCharactersToNode(characters, node = undefined) {

    if (!Array.isArray(characters)) {
      throw new Error('`characters` should be array');
    }

    if (characters.length === 0) {
      return;
    }

    const character = characters[0];
    const wordEnd = characters.length === 1;

    if (!node) {
      if (!this.root) {
        this.root = new Node('', false);
      }
      node = this.root;
    }

    const child = node.get(character);
    const subCharacters = characters.slice(1, characters.length);

    let nextNode;
    // trie already has this character
    if (child) {
      if (child.wordEnd === wordEnd) {
        nextNode = child;
      } else {
        // add node
        nextNode = new Node(character, wordEnd);
        node.addNode(nextNode);
      }
    } else {
      // add new node
      nextNode = new Node(character, wordEnd);
      node.addNode(nextNode);
    }
    if (!wordEnd) {
      this.addCharactersToNode(subCharacters, nextNode);
    }
  }

  /**
   * Check if word is in the trie
   * O(n) - n is the length of the word
   * @param {string} word - word to search
   * @returns {boolean} true is trie has word
   * @throws {Error} `word` should be string
   */
  hasWord(word) {

    if (!this.root) {
      // has no root - has no words
      return false;
    }

    if (typeof word !== 'string') {
      throw new Error('`word` should be string');
    }

    const characters = word.split('');
    let index = 0;
    let node = this.root;

    while (index < word.length) {

      const character = characters[index];
      node = node.get(character);

      if (!node) {
        // character not found in the node
        break;
      }
      if (node.wordEnd) {
        // this is the end of the word
        break;
      }
      // goto next character
      index++;
    }

    if (!node || !node.wordEnd) {
      // we didn't found the end of the word
      // this means that word isn't in the trie
      return false;
    }

    // word found!
    return true;
  }

  /**
   * Delete word from trie
   * O(n) - n is the length of the word
   */
  deleteWord() {
    throw new Error('not implemented');
  }

}

module.exports = {Node, Trie};
