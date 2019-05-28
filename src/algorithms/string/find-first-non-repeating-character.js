// Find first non-repeating character in the string

const string = 'swissw'; // correct answer is `w`

function find(string) {

  const charCount = {};
  let nonRepeatingChars = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charCount[char] === undefined) {
      charCount[char] = true;
      nonRepeatingChars.push(char);
    } else {
      nonRepeatingChars = nonRepeatingChars.filter((c) => c !== char);
    }
  }
  return nonRepeatingChars.shift();
}

console.log(find(string));
