import * as readline from "readline";


function isPalindrome(text: string): boolean {
    const cleanedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const reversedText = cleanedText
        .split("")
        .reverse()
        .join("");

    return cleanedText === reversedText;
}


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


input.question("Enter a string: ", (userInput: string) => {
    if (isPalindrome(userInput)) {
        console.log(`"${userInput}" is a palindrome.`);
    } else {
        console.log(`"${userInput}" is not a palindrome.`);
    }

    input.close();
});
