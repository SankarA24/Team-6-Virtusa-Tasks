function findMaximum(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty.");
    }
    return Math.max(...numbers);
}
const numbers = [10, 25, 7, 40, 15];
try {
    const maximum = findMaximum(numbers);
    console.log("Array:", numbers);
    console.log("Maximum value:", maximum);
} catch (error) {
    console.log(error.message);
}