function binaryToDecimal(binary: string): number {
    let decimal = 0;
    for (const digit of binary) {
        if (digit !== "0" && digit !== "1") {
            throw new Error("Invalid binary number. Use only 0 and 1.");
        }
        decimal = decimal * 2 + Number(digit);
    }
    return decimal;
}
const binaryNumber = process.argv[2];
if (!binaryNumber) {
    console.log("Please provide a binary number.");
    console.log("Example: 101101");
} else {
    try {
        const decimal = binaryToDecimal(binaryNumber);
        console.log("Binary:", binaryNumber);
        console.log("Decimal:", decimal);
    } catch (error) {
        console.log((error as Error).message);
    }
}