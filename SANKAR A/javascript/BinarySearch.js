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
const input = process.argv.slice(2);
if (input.length < 2) {
    console.log("Please provide a sorted array and target.");
    console.log("Example: node BinarySearch.js 10,20,30,40,50 40");
} else {
    const numbers = input[0].split(",").map(Number);
    const target = Number(input[1]);
    const result = binarySearch(numbers, target);
    console.log("Array:", numbers);
    console.log("Target:", target);
    if (result === -1) {
        console.log("Element not found.");
    } else {
        console.log("Element found at index:", result);
    }
}