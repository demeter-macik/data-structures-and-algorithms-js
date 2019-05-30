const {Trie} = require('./trie.js');

describe('Trie', () => {

  test('should add word', () => {
    const trie = new Trie();
    trie.addWord('abc');
    const nodeA = trie.root.get('a');
    expect(nodeA.character).toBe('a');
    expect(nodeA.wordEnd).toBeFalsy();
    const nodeB = nodeA.nodes.get('b');
    expect(nodeB.character).toBe('b');
    expect(nodeB.wordEnd).toBeFalsy();
    const nodeC = nodeB.nodes.get('c');
    expect(nodeC.character).toBe('c');
    expect(nodeC.wordEnd).toBeTruthy();
  });

  test('should check if trie has a word', () => {
    const trie = new Trie();
    trie.addWord('abc');
    trie.addWord('aef');
    expect(trie.hasWord('abc')).toBeTruthy();
    expect(trie.hasWord('aef')).toBeTruthy();
    expect(trie.hasWord('vyg')).toBeFalsy();
  });

});
