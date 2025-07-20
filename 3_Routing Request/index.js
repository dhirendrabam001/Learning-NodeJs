const { write } = require("fs");
const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    
    if(req.url === "/") {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>Routing Info</title></head>");
        res.write("<body><h1>Welcome to our router page </h1></body>");
        res.write("</html");
        res.end();
        return; // when one time use code is executed but some error show so use return keyword read next line else if inside code
    } else if (req.url === "/product") {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>Product info</title></head>");
        res.write("<body><h1>Welcome to our router inside product </h1></body>");
        res.write("</html");
        res.end();
        return; // when one time use code is executed but some error show so use return keyword read next line else if inside code
    } else {
         res.end("Router is not found");
    }
    


});

 const PORT = 2500;
    server.listen(PORT, () => {
        console.log(`Server Is Running http://localhost:${PORT}`);
        
    });
