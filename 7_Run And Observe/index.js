const fs = require("fs");
console.log("Fist running code");
const fileName = "dhirendra.txt"


// Synchronization operation
console.log("Second synchronization code run");

fs.writeFileSync("dhirendra.txt", "Hello dhirendra", "utf8");
console.log("Third synchronization code run");

// Asynchronization code

console.log("Fourth Asynchronization code run");
fs.writeFile("dhirendra.txt", "Hello dhirendra", "utf8", (error) => {
    if(error) {
        console.log("Some Error Data Run"); 
    } else {
        console.log("Fifth asynchronization code run");
    }
});

console.log("Sixth Code run");





