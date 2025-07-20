const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req);
    process.exit(); // exit the loop 

});

 const PORT = 2500;
    server.listen(PORT, () => {
        console.log(`Server Is Running http://localhost:${PORT}`);
        
    });