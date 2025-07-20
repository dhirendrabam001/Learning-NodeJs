const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    if(req.url === "/") {
        res.setHeader("Content-type", 'text/html');
        res.write("<html>");
        res.write("<head><title>Taking User Input</title></head>");
        res.write("<body>Enter Your Details");
        res.write('<form action="/submitdata" method="POST">');
        res.write('<input type="text"name="username"placeholder="Enter Your Name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="Female"><br>');
        res.write('<input type="submit" value="submit">');
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        res.end();
        return;
    } else {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head></head>");
        res.write("<body><h1>Welcome to dhirendra bam</h1></body>")
        res.write("</html>");
    }
    


});

 const PORT = 2500;
    server.listen(PORT, () => {
        console.log(`Server Is Running http://localhost:${PORT}`);
        
    });