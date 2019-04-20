// Chaeck if strings are rotation of each others
// Example strings 'OneTwoThree' and 'TwoThreeOne' are rotation.
// And 'OneThreeTwo' isn't.

function check(string1, string2) {

  if (string1.length !== string2.length) {
    return false;
  }

  return string1.concat(string1).indexOf(string2) !== -1;
}

console.log(check('OneTwoThree', 'TwoThreeOne'));
console.log(check('OneTwoThree', 'OneThreeTwo'));