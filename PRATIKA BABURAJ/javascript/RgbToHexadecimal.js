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
function convertToHex(value){
    return value.toString(16).padStart(2,"0").toUpperCase();
}
function rgbToHex(red,green,blue){
    if(
        red<0 || red>255 ||
        green<0 || green>255 ||
        blue<0 || blue>255
    ){
        throw new Error("RGB values must be between 0 and 255.");
    }
    return `#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`;
}
async function main(){
    const red=Number(
        await getInput("Enter red value (0-255): ")
    );
    const green=Number(
        await getInput("Enter green value (0-255): ")
    );
    const blue=Number(
        await getInput("Enter blue value (0-255): ")
    );
    if(
        !Number.isInteger(red) ||
        !Number.isInteger(green) ||
        !Number.isInteger(blue)
    ){
        console.log("Please enter valid integer RGB values.");
        inputReader.close();
        return;
    }
    try{
        const hexadecimalColor=rgbToHex(red,green,blue);
        console.log("\nRGB Values:");
        console.log(`Red: ${red}`);
        console.log(`Green: ${green}`);
        console.log(`Blue: ${blue}`);
        console.log(`\nHexadecimal Color: ${hexadecimalColor}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
    }
    inputReader.close();
}
main();