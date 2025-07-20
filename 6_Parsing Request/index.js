const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
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
       return res.end();

    } else if(req.url.toLowerCase() === "/submitdata" && req.method == "POST") {

        // Chunk read buffer value 
        const bodyData = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            
            bodyData.push(chunk); 
        });

        req.on("end", () => {
            const finalAns = Buffer.concat(bodyData).toString(); // convert buffer data to toString
            console.log(finalAns);
            
            const newParam = new URLSearchParams(finalAns);
            // const paramObject = {};
            // for(const [key, val] of newParam.entries()) {
            //     paramObject[key] = val;

            //     console.log(paramObject);
                
            // }

            // Second method
            const mainObj = Object.fromEntries(newParam);
            console.log(mainObj);
            
            fs.writeFileSync('user.txt', JSON.stringify(mainObj));
        });

        // fs.writeFileSync("user.txt", "dhirendra");
        res.statusCode = 302;
        res.setHeader("Location" , "/");
        return res.end();
        

    }
    else {
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