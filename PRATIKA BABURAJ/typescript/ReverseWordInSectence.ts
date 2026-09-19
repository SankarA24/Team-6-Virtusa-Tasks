export {};
const readline=require("readline");
const inputReader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function getInput(question:string):Promise<string>{
    return new Promise((resolve)=>{
        inputReader.question(question,resolve);
    });
}
function reverseWord(word:string):string{
    return word.split("").reverse().join("");
}
function reverseEveryWord(sentence:string):string{
    const words=sentence.split(" ");
    return words
        .map((word)=>reverseWord(word))
        .join(" ");
}
async function main():Promise<void>{
    const sentence=await getInput("Enter a sentence: ");
    const reversedSentence=reverseEveryWord(sentence);
    console.log("\nOriginal sentence:");
    console.log(sentence);
    console.log("\nSentence after reversing every word:");
    console.log(reversedSentence);
    inputReader.close();
}
main();