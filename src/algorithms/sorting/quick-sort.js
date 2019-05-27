// Quick sort implementation
// Best case O(NlogN)
// Worst case O(N^2)

const array = [1, 7, 5, 1, 3];

function sort(array) {

    function swap(i, j) {
        if (i === j) {
            return;
        }
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }

    function quicksort(low, high) {

        let l = low;
        let h = high;

        const pivot = array[Math.floor(low + (high - low) / 2)];

        while (l <= h) {

            while (array[l] < pivot) {
                l++;
            }

            while (array[h] > pivot) {
                h--;
            }

            if (l <= h) {
                swap(l, h);
                l++;
                h--;
            }
        }

        if (low < h) {
            quicksort(low, h);
        }

        if (l < high) {
            quicksort(l, high);
        }
    }

    quicksort(0, array.length - 1);
    return array;
}

console.log(sort(array));
