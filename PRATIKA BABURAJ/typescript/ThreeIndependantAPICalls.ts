export {};
    import readline from "readline";
const inputReader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function getInput(question:string):Promise<string>{
    return new Promise((resolve)=>{
        inputReader.question(question,resolve);
    });
}
async function fetchApiData(apiUrl:string):Promise<any>{
    try{
        const response=await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return await response.json();
    }catch(error){
        return{
            error:error instanceof Error ? error.message : "Unknown error"
        };
    }
}
async function executeConcurrentCalls(apiUrls:string[]):Promise<any[]>{
    console.log("\nExecuting API calls concurrently...\n");
    const results=await Promise.all(
        apiUrls.map((apiUrl)=>fetchApiData(apiUrl))
    );
    return results;
}
async function main():Promise<void>{
    const apiUrls:string[]=[];
    console.log("Enter 3 API URLs:");
    for(let index=0;index<3;index++){
        const apiUrl=await getInput(`API URL ${index + 1}: `);
        apiUrls.push(apiUrl);
    }
    const results=await executeConcurrentCalls(apiUrls);
    console.log("\nAPI Results:");
    results.forEach((result,index)=>{
        console.log(`\nAPI ${index + 1}:`);
        console.log(JSON.stringify(result,null,2));
    });
    inputReader.close();
}
main();