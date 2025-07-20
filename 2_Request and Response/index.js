const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    
    // Response info
    res.setHeader("Content-type" , "text/html");
    res.write("<html");
    res.write("<head><title>Request and Response</title></head>");
    res.write("<body><h1>Hello Dhirendra</h1></body>");
    res.write("</html");
    res.end();
    


});

 const PORT = 2500;
    server.listen(PORT, () => {
        console.log(`Server Is Running http://localhost:${PORT}`);
        
    });