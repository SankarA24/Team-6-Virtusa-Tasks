import * as readline from "readline";

function countWordFrequency(paragraph: string): Map<string, number> {
    const words = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 0);

    const wordFrequency = new Map<string, number>();

    for (const word of words) {
        const currentCount = wordFrequency.get(word) || 0;

        
        wordFrequency.set(word, currentCount + 1);
    }

    return wordFrequency;
}


function displayWordFrequency(
    wordFrequency: Map<string, number>
): void {
    console.log("\nWord Frequencies:");

    for (const [word, frequency] of wordFrequency) {
        console.log(`${word}: ${frequency}`);
    }
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a paragraph: ", (paragraph: string) => {

    if (paragraph.trim().length === 0) {
        console.log("Paragraph cannot be empty.");
    } else {
        const wordFrequency = countWordFrequency(paragraph);
        displayWordFrequency(wordFrequency);
    }

    input.close();
});