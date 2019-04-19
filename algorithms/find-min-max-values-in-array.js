// Find min and max values in array

const array = [1, 2, 3, 4, Number.MIN_VALUE, 4, 5, 6, 76, 7, 8];

function getMinMax(array) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }
  return { min, max };
}

console.log(getMinMax(array));