function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (array[middle] === target) {
            return middle;
        }
        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
const numbers = [10, 20, 30, 40, 50, 60, 70];
const target = 50;
const result = binarySearch(numbers, target);
if (result === -1) {
    console.log("Element not found.");
} else {
    console.log("Element found at index:", result);
}