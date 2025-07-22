const fs = require("fs");
console.log("Fist running code");

// Synchronization operation
console.log("Second synchronization code run");

const readSyc = fs.writeFileSync("dhirendra.txt", "Hello dhirendra", "utf8");
console.log("Third synchronization code run");

// Asynchronization code

console.log("Fourth Asynchronization code run");
const readAsy = fs.writeFile("dhiraj.txt", "Hello dhiraj", "utf8", (error,dataAsy) => {
    if(error) {
        console.log("Some Error Data Run"); 
    } else {
        console.log("Fifth asynchronization code run");
    }
});

console.log("Sixth Code run");





