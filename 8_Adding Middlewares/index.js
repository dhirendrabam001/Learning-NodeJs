const express = require("express");
const app = express();

const PORT = 3000;

app.use((req,res,next) => {
    console.log("Give me first middleware", req.url, req.method);
    next();
    
});

app.use((req,res,next) => {
    console.log("Give me second middleware", req.url, req.method);
    res.send("Hello world")
    
});


app.listen(PORT, () => {
    console.log(`Server Is Running Port Number:${PORT}`);
    
});