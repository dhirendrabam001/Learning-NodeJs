const express = require("express");
const app = express();



// add two dummy middleware that logs request path and return method repestively

app.use((req,res,next) => {
    console.log("This is the first dummy middleware", req.method);
    next();
    
});
app.use((req,res,next) => {
    console.log("This is the second dummy middleware");
    next();
    
});


// Add two handling using two more middleware that handle path / and /contactinfo page

app.get("/", (req,res,next) => {
    res.send("Welcome to Dhirendra");
     
});

app.get("/contact-us", (req,res,next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <title>New Form</title>
        </head>
        <body>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter Your Name" required>
        <input type="email" name="email" placeholder="Enter Your Email" required>
        <button type="submit">Result</button>
      </form>
     </body>
    </html>
        `);
});

app.post("/contact-us", (req,res,next) => {
    const bodyData = [];
    req.on("data", (chunk) => {
        console.log(chunk);
        bodyData.push(chunk);  
    });
    req.on("end", () => {
        const buffValue = Buffer.concat(bodyData).toString();
        console.log(buffValue);

        
        const params = new URLSearchParams(buffValue);
        const finalResult = {};
        for(const [key, val] of params.entries()) {
            finalResult[key] = val;
        console.log(finalResult);
        }
        // Second method
        const params2 = Object.fromEntries(params);
        console.log(params2);
        
        
        
    });
    next();

});
// third middleware 

app.use((req,res) => {
    console.log("This is third middleware");
    res.end("This is final middleware which is no route not found");
    
});




const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server Is Running Port Number Is:${PORT}`);  
});