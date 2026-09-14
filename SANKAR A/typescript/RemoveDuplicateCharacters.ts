function removeDuplicateCharacters(text: string): string {
    const seen = new Set<string>();
    let result = "";
    for (const character of text) {
        if (!seen.has(character)) {
            seen.add(character);
            result += character;
        }
    }
    return result;
}
const input = process.argv.slice(2).join(" ");
if (!input) {
    console.log("Please provide a string.");
    console.log('Example: programming');
} else {
    const result = removeDuplicateCharacters(input);
    console.log("Original string:", input);
    console.log("After removing duplicates:", result);
}