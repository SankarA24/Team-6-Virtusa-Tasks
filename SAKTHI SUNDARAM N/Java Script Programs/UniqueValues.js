const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function findUniqueValues(values) {
    return [...new Set(values)];
}


input.question(
    "Enter array values separated by commas: ",
    (userInput) => {

        
        const values = userInput
            .split(",")
            .map(value => value.trim())
            .filter(value => value !== "");

        if (values.length === 0) {
            console.log("No valid values entered.");
            input.close();
            return;
        }

        const uniqueValues = findUniqueValues(values);

        console.log("\nOriginal Array:");
        console.log(values);

        console.log("\nUnique Values:");
        console.log(uniqueValues);

        input.close();
    }
);