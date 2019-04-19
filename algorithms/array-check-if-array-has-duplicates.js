// Check if array has duplicate values

const uniqueItems = [1, 2, 3, 4, 5];
const duplicateItems = [1, 2, 1, 2, 4];

// Using Set from ES2016
function hasDuplicates(array) {
  const set = new Set(array);
  return set.size !== array.length;
}

console.log(hasDuplicates(uniqueItems));
console.log(hasDuplicates(duplicateItems));

// Using Object
function hasDuplicates2(array) {
  const set = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (set[item] !== undefined) {
      return true;
    }
    set[item] = 1;
  }
  return false;
}
console.log(hasDuplicates2(uniqueItems));
console.log(hasDuplicates2(duplicateItems));