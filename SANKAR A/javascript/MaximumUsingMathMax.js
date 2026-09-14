function findMaximum(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty.");
    }
    return Math.max(...numbers);
}
const input = process.argv[2];
if (!input) {
    console.log("Please provide numbers separated by commas.");
    console.log("Example: node MaximumUsingMathMax.js 10,25,7,40,15");
} else {
    const numbers = input.split(",").map(Number);
    if (numbers.some(Number.isNaN)) {
        console.log("Please enter only valid numbers.");
    } else {
        try {
            const maximum = findMaximum(numbers);
            console.log("Array:", numbers);
            console.log("Maximum value:", maximum);
        } catch (error) {
            console.log(error.message);
        }
    }
}