// Reverse string

function reverse1(string) {
  return Array.from(string).reverse().join('');
}

console.log(reverse1('abc'));

function reverse2(string) {

  if (string.length === 1) {
    return string;
  }

  return reverse2(string.slice(1, string.length)) + string[0];
}

console.log(reverse2('abc'));
