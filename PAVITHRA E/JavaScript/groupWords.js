let words = [
    "apple",
    "banana",
    "apricot",
    "blueberry",
    "cherry",
    "avocado"
];

let groupedWords = new Map();

for (let word of words) {

    let firstChar = word.charAt(0);

    if (!groupedWords.has(firstChar)) {
        groupedWords.set(firstChar, []);
    }

    groupedWords.get(firstChar).push(word);
}

console.log(groupedWords);