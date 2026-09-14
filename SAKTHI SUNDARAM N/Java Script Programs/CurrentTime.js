function displayCurrentTime() {
    const currentDate = new Date();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;

    
    process.stdout.write(`\rCurrent Time: ${currentTime}`);
}

displayCurrentTime();

setInterval(displayCurrentTime, 1000);