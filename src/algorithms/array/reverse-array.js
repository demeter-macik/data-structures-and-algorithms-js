// How to reverse array

// Using build-in method
const array1 = [1, 2, 3, 4, 5];
function reverse1(array) {
  return array.reverse();
}
console.log(reverse1(array));

// My own implementation
const array2 = [1, 2, 3, 4, 5];
function reverse2(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
console.log(reverse2(array2));
