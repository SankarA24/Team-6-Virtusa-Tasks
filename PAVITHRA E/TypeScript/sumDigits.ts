let num: number = 12345;
let sum: number = 0;

while (num > 0) {
    let digit: number = num % 10;

    sum = sum + digit;

    num = Math.floor(num / 10);
}

console.log("Sum of digits =", sum);