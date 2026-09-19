const readline=require("readline");
const inputReader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function getInput(question){
    return new Promise((resolve)=>{
        inputReader.question(question,resolve);
    });
}
function moveZeroesToEnd(numbers){
    let nonZeroIndex=0;
    for(let index=0;index<numbers.length;index++){
        if(numbers[index]!==0){
            numbers[nonZeroIndex]=numbers[index];
            nonZeroIndex++;
        }
    }
    while(nonZeroIndex<numbers.length){
        numbers[nonZeroIndex]=0;
        nonZeroIndex++;
    }
    return numbers;
}
async function main(){
    const numberOfElements=Number(
        await getInput("Enter number of elements: ")
    );
    const input=await getInput("Enter the elements separated by spaces: ");
    const numbers=input
        .split(" ")
        .map(Number);
    if(numbers.length!==numberOfElements){
        console.log("Number of elements does not match the given count.");
        inputReader.close();
        return;
    }
    console.log("\nOriginal array:");
    console.log(numbers);
    const result=moveZeroesToEnd(numbers);
    console.log("\nArray after moving zeroes to the end:");
    console.log(result);
    inputReader.close();
}
main();