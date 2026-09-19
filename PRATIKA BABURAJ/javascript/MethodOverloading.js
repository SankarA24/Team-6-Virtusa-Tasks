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
function calculateSum(...numbers){
    let sum=0;
    for(const number of numbers){
        sum+=number;
    }
    return sum;
}
async function main(){
    const firstNumber=Number(
        await getInput("Enter first number: ")
    );
    const secondNumber=Number(
        await getInput("Enter second number: ")
    );
    const thirdNumber=Number(
        await getInput("Enter third number: ")
    );
    console.log("\nMethod overloading demonstration:");
    console.log(
        `Sum of 1 number: ${calculateSum(firstNumber)}`
    );
    console.log(
        `Sum of 2 numbers: ${calculateSum(firstNumber,secondNumber)}`
    );
    console.log(
        `Sum of 3 numbers: ${calculateSum(firstNumber,secondNumber,thirdNumber)}`
    );
    inputReader.close();
}
main();