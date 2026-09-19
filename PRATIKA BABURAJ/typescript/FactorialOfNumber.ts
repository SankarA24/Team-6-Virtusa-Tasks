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
function calculateFactorial(number:number):number{
    if(number<0){
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let factorial=1;
    for(let currentNumber=1;currentNumber<=number;currentNumber++){
        factorial*=currentNumber;
    }
    return factorial;
}
async function main():Promise<void>{
    const input=await getInput("Enter a non-negative integer: ");
    const number=Number(input);
    if(!Number.isInteger(number) || number<0){
        console.log("Please enter a valid non-negative integer.");
        inputReader.close();
        return;
    }
    try{
        const result=calculateFactorial(number);
        console.log(`Factorial of ${number} = ${result}`);
    }catch(error){
        if(error instanceof Error){
            console.log(`Error: ${error.message}`);
        }
    }
    inputReader.close();
}
main();