// Balanced parantheses
const openingParentheses = ['[', '{', '<'];
const closingParentheses = [']', '}', '>'];

function isStringBalanced(string) {

  const parantheses = string.split('');
  const stack = [];

  for (let i = 0; i < parantheses.length; i++) {
    const parenthesis = parantheses[i];
    if (is(parenthesis, openingParentheses)) {
      stack.push(parenthesis);
    } else if (is(parenthesis, closingParentheses)) {
      const open = stack.pop();
      if (!equal(open, parenthesis)) {
        return false;
      }
    } else {
      throw new Error('Unsupported char');
    }
  }
  return true;
}

function is(char, parentheses) {
  return parentheses.includes(char);
}

function equal(open, close) {
  return openingParentheses.indexOf(open) === closingParentheses.indexOf(close);
}

const balancedString = '[[{}<><>[]]]';
const notBalancedString = '[[{}<><[]]]';
const invalidString = '[[{}<>A<>[]]]';

console.log(`Is ${balancedString} balanced ${isStringBalanced(balancedString)}`);
console.log(`Is ${notBalancedString} balanced ${isStringBalanced(notBalancedString)}`);
console.log(`Is ${invalidString} balanced ${isStringBalanced(invalidString)}`);